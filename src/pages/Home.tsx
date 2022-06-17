import usePageTitle from '../hooks/usePageTitle'
import InputSearch from '../components/InputSearch'
import { useState } from 'react'
import ErrorAlert from '../components/ErrorAlert'

const Home = () => {
  usePageTitle('Home page')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  return (
    <>
      <InputSearch setLoading={setLoading} setError={setError} />
      <ErrorAlert error={error} setError={setError} />
      <p>{loading ? 'Loading...' : 'Loaded'}</p>
    </>
  )
}

export default Home
