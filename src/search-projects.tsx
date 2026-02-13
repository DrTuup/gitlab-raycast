import { Action, ActionPanel, getPreferenceValues, Icon, List } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { useState } from "react";
import { Preferences } from "./utils/preferences";
import { Project } from "./utils/gitlab";
import { cloneRepository } from "./services/repositories";

export default function Command() {
  const [searchText, setSearchText] = useState("");
  const preferences = getPreferenceValues<Preferences>();
  const { isLoading, data } = useFetch<Project[]>(
    `https://${preferences.gitlab_api_base_url}/api/v4/search?scope=projects&&search=${searchText}`,
    {
      keepPreviousData: true,
      headers: {
        "PRIVATE-TOKEN": `${preferences.gitlab_private_token}`,
      },
    },
  );

  return (
    <List isLoading={isLoading} searchText={searchText} onSearchTextChange={setSearchText} throttle>
      {data?.map((project) => (
        <List.Item
          key={project.id}
          title={project.name_with_namespace}
          icon={Icon.Link}
          actions={
            <ActionPanel>
              <Action
                title="Clone Repository"
                icon={Icon.Download}
                onAction={() => cloneRepository(project.ssh_url_to_repo, preferences)}
              />
              <Action.OpenInBrowser title="Open in Browser" url={project.web_url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
