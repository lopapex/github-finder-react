import {
  Typography,
  Grid,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Link,
} from '@mui/material'
import { FC } from 'react'
import { useUserInfo } from '../hooks/useUserInfo';
import UserDetailLine from './UserDetailLine'

const UserCard: FC = () => {
  const [userInfo] = useUserInfo();

  const memberSince = () => {
    if (!userInfo) return;
    const date = new Date(userInfo?.user.created_at);
    return date.toLocaleDateString('en');
  }

  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Avatar alt='Avatar' src={userInfo?.user.avatar_url} sx={{ width: 150, height: 150 }} />
          </Grid>

          <Grid item xs={9}>
            <Typography gutterBottom variant='h5' component='div'>
              {userInfo?.user.login}
            </Typography>

            {userInfo?.user.company && (
              <UserDetailLine header={'Company:'}>{userInfo?.user.company}</UserDetailLine>
            )}

            {userInfo?.user.blog && (
              <UserDetailLine header={'Blog:'}>
                <Link color='inherit' href={userInfo?.user.blog}>
                  {userInfo?.user.blog}
                </Link>
              </UserDetailLine>
            )}

            {userInfo?.user.location && (
              <UserDetailLine header={'Location:'}>{userInfo?.user.location}</UserDetailLine>
            )}

            <UserDetailLine header={'Member since:'}>{memberSince()}</UserDetailLine>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Chip label={`Followers: ${userInfo?.user.followers}`} variant='outlined' />
        <Chip label={`Following: ${userInfo?.user.following}`} variant='outlined' />
        <Chip label={`Public Repos: ${userInfo?.user.public_repos}`} variant='outlined' />
        <Chip label={`Public Gists: ${userInfo?.user.public_gists}`} variant='outlined' />

        <Box sx={{ flexGrow: 1 }} />
        {!!userInfo?.orgs.length && (
          <Button size='small' variant="contained">
            Organization
          </Button>
        )}
        <Button size='small' variant="contained">
          Public repos
        </Button>
      </CardActions>
    </Card>
  )
}

export default UserCard;

