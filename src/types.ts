export interface Experience {
  year: string;
  role: string;
  company: string;
  desc: string;
}

export interface Project {
  name: string;
  desc: string;
  link: string;
  tags: string[];
}

export interface TopLang {
  name: string;
  percentage: number;
}

export interface GithubStats {
  repos: number;
  followers: number;
  topLangs: TopLang[];
}

export interface GithubRepoResponse {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  fork: boolean;
}

export interface GithubUserResponse {
  public_repos: number;
  followers: number;
}
