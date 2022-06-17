import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { User, Org } from '../utils/types'

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

export const useUserInfo = () => useContext(UserInfoContext);
