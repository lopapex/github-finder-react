export type User = {
  avatar_url: string
  login: string
  company: string
  location: string
  blog: string
  created_at: string
  followers: number
  following: number
  public_repos: number
  public_gists: number
}

export type Org = {
  avatar_url: string
  login: string
  description: string
}

export type Repo = {
  name: string
  language: string
  html_url: string
}
