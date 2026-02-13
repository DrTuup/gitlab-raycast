import { exec } from "child_process";
import { showToast, Toast } from "@raycast/api";
import { Preferences } from "../utils/preferences";
import { promisify } from "util";

const execPromise = promisify(exec);

async function openInIDE(path: string, preferences: Preferences) {
  let command: string;
  let ideName: string;

  if (preferences.preferred_ide === "pycharm") {
    command = `/opt/homebrew/bin/pycharm ${path}`;
    ideName = "PyCharm";
  } else {
    command = `/Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin/code ${path}`;
    ideName = "VS Code";
  }

  try {
    await execPromise(command);
    showToast({ title: `Successfully opened repository in ${ideName}.` });
  } catch (error) {
    showToast({ title: `Failed to open repository in ${ideName}. ${error}` });
  }
}

export function getLocalPath(url: string, preferences: Preferences) {
  return `${preferences.clone_base_path}/${url.replace(`ssh://git@${preferences.gitlab_api_base_url}:2240/`, "").replace(".git", "").toLowerCase()}`;
}

export async function cloneRepository(url: string, preferences: Preferences) {
  const path = getLocalPath(url, preferences);
  const command = `git clone ${url} ${path}`;
  showToast({ style: Toast.Style.Animated, title: `Trying to clone repository ${url}` });

  try {
    await execPromise(command);
    showToast({ style: Toast.Style.Success, title: `Successfully cloned repository to ${path}` });
  } catch {
    showToast({ style: Toast.Style.Success, title: `Repository already cloned` });
  }

  await openInIDE(path, preferences);
}
