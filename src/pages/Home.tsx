import usePageTitle from '../hooks/usePageTitle'
import InputSearch from '../components/InputSearch'
import { useState } from 'react'

const Home = () => {
  usePageTitle('Home page')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  return (
    <>
      <InputSearch setLoading={setLoading} setError={setError} />
      <p>{loading ? 'Loading...' : 'Loaded'}</p>
      {!!error.length && <p>{error}</p>}
    </>
  )
}

export default Home
