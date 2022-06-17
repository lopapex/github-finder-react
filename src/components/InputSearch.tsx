import { FC, FormEvent, SetStateAction, Dispatch } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { getUserData } from '../utils/github-api'
import { useUserInfo } from '../hooks/useUserInfo'

type props = {
  setLoading: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<string>>
}

const InputSearch: FC<props> = ({ setLoading, setError }) => {
  const[, setUserInfo] = useUserInfo();

  const findUser = async (e: FormEvent) => {
    try {
      setUserInfo(null);
			setLoading(true);
      const userData = await getUserData(e.target[0].value);
			setError('');
			setUserInfo(userData);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
			setError(e.response.data.message);
    } finally {
			setLoading(false);
		}
  }
  return (
    <Paper
      component='form'
      sx={{ p: '2px 4px', mt: '34px', display: 'flex', alignItems: 'center', width: '100%' }}
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        findUser(e)
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Github Users'
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default InputSearch
