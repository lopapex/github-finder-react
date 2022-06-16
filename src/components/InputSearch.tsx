import { FC, FormEvent, SetStateAction, Dispatch } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { getUserData } from '../utils/github-api'

type props = {
  setLoading: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<string>>
}

const InputSearch: FC<props> = ({ setLoading, setError }) => {
  const findUser = async (e: FormEvent) => {
		if (!e.target[0].value.length) {
			return;
		}
    try {
			setLoading(true);
      const userData = await getUserData(e.target[0].value);
			setError('');
			console.log(userData);
    } catch (e) {
			setError(e.message);
    } finally {
			setLoading(false);
		}
  }
  return (
    <Paper
      component='form'
      sx={{ p: '2px 4px', m: '50px 0 0 0', display: 'flex', alignItems: 'center', width: 800 }}
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
