import { FC } from 'react'
import { Avatar, Card, CardContent, Typography } from '@mui/material'
import { Org } from '../hooks/useUserInfo'

type props = {
  org: Org
}

const OrganizationCard: FC<props> = ({ org }) => {
  return (
    <>
      <Card
        sx={{
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Avatar alt='Avatar' src={org.avatar_url} sx={{ width: 150, height: 150, m: 'auto' }} />

          <Typography gutterBottom variant='h5' component='div'>
            {org.login}
          </Typography>

          <Typography variant='caption' component='div'>
            {org.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
export default OrganizationCard
