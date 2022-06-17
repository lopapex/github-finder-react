import usePageTitle from '../hooks/usePageTitle'
import InputSearch from '../components/InputSearch'
import { useState } from 'react'
import ErrorAlert from '../components/ErrorAlert'
import CircularProgress from '@mui/material/CircularProgress'
import { useUserInfo } from '../hooks/useUserInfo'
import UserCard from '../components/UserCard'

const Home = () => {
  usePageTitle('Home page')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [userInfo] = useUserInfo()

  return (
    <>
      <InputSearch setLoading={setLoading} setError={setError} />
      <ErrorAlert error={error} setError={setError} />
      {loading && <CircularProgress color='inherit' />}

      {userInfo && (
        <UserCard />
      )}
    </>
  )
}

export default Home
