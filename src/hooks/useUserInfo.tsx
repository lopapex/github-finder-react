import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react'

type User = {
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

type UserInfo = {
  user: User
  orgs: [Org]
} | null

type UserInfoState = [UserInfo, Dispatch<SetStateAction<UserInfo>>]

export const UserInfoContext = createContext<UserInfoState>(undefined as never)

export const UserInfoProvider: FC = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(null);
  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>{children}</UserInfoContext.Provider>
  )
}

export const useUserInfo = () => useContext(UserInfoContext)
