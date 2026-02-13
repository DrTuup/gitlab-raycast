// Region: GitLab Project API model
export interface Project {
  id: number;
  description: null;
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  created_at: string;
  default_branch: string;
  // tag_list: any[];
  // topics: any[];
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  readme_url: string;
  forks_count: number;
  avatar_url: null;
  star_count: number;
  last_activity_at: string;
  namespace: Namespace;
  container_registry_image_prefix: string;
  _links: _links;
  packages_enabled: boolean;
  empty_repo: boolean;
  archived: boolean;
  visibility: string;
  resolve_outdated_diff_discussions: boolean;
  container_expiration_policy: Container_expiration_policy;
  repository_object_format: string;
  issues_enabled: boolean;
  merge_requests_enabled: boolean;
  wiki_enabled: boolean;
  jobs_enabled: boolean;
  snippets_enabled: boolean;
  container_registry_enabled: boolean;
  service_desk_enabled: boolean;
  service_desk_address: null;
  can_create_merge_request_in: boolean;
  issues_access_level: string;
  repository_access_level: string;
  merge_requests_access_level: string;
  forking_access_level: string;
  wiki_access_level: string;
  builds_access_level: string;
  snippets_access_level: string;
  pages_access_level: string;
  analytics_access_level: string;
  container_registry_access_level: string;
  security_and_compliance_access_level: string;
  releases_access_level: string;
  environments_access_level: string;
  feature_flags_access_level: string;
  infrastructure_access_level: string;
  monitor_access_level: string;
  model_experiments_access_level: string;
  model_registry_access_level: string;
  emails_disabled: boolean;
  emails_enabled: boolean;
  shared_runners_enabled: boolean;
  lfs_enabled: boolean;
  creator_id: number;
  import_url: null;
  import_type: null;
  import_status: string;
  open_issues_count: number;
  description_html: string;
  updated_at: string;
  ci_default_git_depth: number;
  ci_forward_deployment_enabled: boolean;
  ci_forward_deployment_rollback_allowed: boolean;
  ci_job_token_scope_enabled: boolean;
  ci_separated_caches: boolean;
  ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
  ci_id_token_sub_claim_components: string[];
  build_git_strategy: string;
  keep_latest_artifact: boolean;
  restrict_user_defined_variables: boolean;
  ci_pipeline_variables_minimum_override_role: string;
  runners_token: null;
  runner_token_expiration_interval: null;
  group_runners_enabled: boolean;
  auto_cancel_pending_pipelines: string;
  build_timeout: number;
  auto_devops_enabled: boolean;
  auto_devops_deploy_strategy: string;
  ci_push_repository_for_job_token_allowed: boolean;
  ci_config_path: null;
  public_jobs: boolean;
  // shared_with_groups: any[];
  only_allow_merge_if_pipeline_succeeds: boolean;
  allow_merge_on_skipped_pipeline: null;
  request_access_enabled: boolean;
  only_allow_merge_if_all_discussions_are_resolved: boolean;
  remove_source_branch_after_merge: boolean;
  printing_merge_request_link_enabled: boolean;
  merge_method: string;
  squash_option: string;
  enforce_auth_checks_on_uploads: boolean;
  suggestion_commit_message: null;
  merge_commit_template: null;
  squash_commit_template: null;
  issue_branch_template: null;
  warn_about_potentially_unwanted_characters: boolean;
  autoclose_referenced_issues: boolean;
  approvals_before_merge: number;
  mirror: boolean;
  external_authorization_classification_label: null;
  marked_for_deletion_at: null;
  marked_for_deletion_on: null;
  requirements_enabled: boolean;
  requirements_access_level: string;
  security_and_compliance_enabled: boolean;
  pre_receive_secret_detection_enabled: boolean;
  // compliance_frameworks: any[];
  issues_template: null;
  merge_requests_template: null;
  ci_restrict_pipeline_cancellation_role: string;
  merge_pipelines_enabled: boolean;
  merge_trains_enabled: boolean;
  merge_trains_skip_train_allowed: boolean;
  only_allow_merge_if_all_status_checks_passed: boolean;
  allow_pipeline_trigger_approve_deployment: boolean;
  prevent_merge_without_jira_issue: boolean;
  permissions: Permissions;
}

interface Namespace {
  id: number;
  name: string;
  path: string;
  kind: string;
  full_path: string;
  parent_id: number;
  avatar_url: null;
  web_url: string;
}

interface _links {
  self: string;
  issues: string;
  merge_requests: string;
  repo_branches: string;
  labels: string;
  events: string;
  members: string;
  cluster_agents: string;
}

interface Container_expiration_policy {
  cadence: string;
  enabled: boolean;
  keep_n: number;
  older_than: string;
  name_regex: string;
  name_regex_keep: null;
  next_run_at: string;
}

interface Permissions {
  project_access: null;
  group_access: Group_access;
}

interface Group_access {
  access_level: number;
  notification_level: number;
}
// Endregion: GitLab Project API model
