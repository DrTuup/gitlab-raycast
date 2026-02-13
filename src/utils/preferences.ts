// Region: Preferences
export interface Preferences {
  gitlab_api_base_url: string;
  gitlab_private_token: string;
  gitlab_ssh_port: number;
  clone_base_path: string;
  preferred_ide: "vscode" | "pycharm";
}
// Endregion: Preferences
