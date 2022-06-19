import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FC } from 'react';

type props = {
  header: string
}

const UserDetailLine: FC<props> = ({ header, children }) => {
  return (
    <Typography variant='subtitle1'>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {header}
        </Grid>
        <Grid item xs={9}>
          {' '}
          {children}
        </Grid>
      </Grid>
    </Typography>
  )
}

export default UserDetailLine;
