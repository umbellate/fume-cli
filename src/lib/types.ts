export interface FumeAuth {
  token: string;
}

export interface FumeEnvironment {
  env: string;
  web: string;
  api: string;
}

export interface YamlConfig {
  id: number;
  /*
  team_id: number;
  name: string;
  environments: Partial<Record<'staging' | 'production', Environment>>;
 */
}

export interface Environment {
  memory: number;
  domain: string | boolean;
}

export interface AwsClientConfig {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
  expiration: string;
  region: string;
}

export interface S3Config {
  code: string;
  layer: string;
  codePath: string;
  layerPath: string;
  bucket: string;
  headless: string;
  paths: S3ConfigPath;
}
export interface S3ConfigPath {
  code: string;
  layer: string;
}

export enum PackageType {
  code = 'code',
  layer = 'layer',
}

export enum Mode {
  layer = 'layer',
  efs = 'efs',
  headless = 'headless',
}

export interface Size {
  deps: number;
  code: number;
  static: number;
}

export interface Project {
  id: number;
  name: string;
  region: string;
  structure: string;
}

export interface Env {
  id: number;
  team_id: number;
  name: string;
  detail: EnvDetail;
  variables: Array<Variable>;
}

export interface EnvDetail {
  hash: string;
  DistributionId: string;
}

export interface Variable {
  id: number;
  env_id: number;
  name: string;
  value: string;
  private: boolean;
  is_synced: boolean;
}

export interface Entry {
  status: string;
  id: number;
  team_id: number;
  firstDeploy: boolean;
  project: Project;
  env: Env;
}

export interface Inquiry {
  key: string;
  name: string;
}
