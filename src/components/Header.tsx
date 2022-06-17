import { FC } from 'react'
import { ArrowBack } from '@mui/icons-material'
import { Grid, Fab } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useUserInfo } from '../hooks/useUserInfo'

type Props = {
  title: string
}

const Header: FC<Props> = ({ title }) => {
  const navigate = useNavigate()
  const [userInfo] = useUserInfo()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      <Grid container justifyContent='space-between' sx={{ mt: '34px' }}>
        <Fab size='small' aria-label='add' onClick={() => handleClick()}>
          <ArrowBack />
        </Fab>

        <h3>{`${title} for ${userInfo?.user.login}`}</h3>

        <p></p>
      </Grid>
    </>
  )
}
export default Header;
