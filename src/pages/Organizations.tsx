import Header from '../components/Header';
import usePageTitle from '../hooks/usePageTitle';
import { useUserInfo } from '../hooks/useUserInfo';
import OrganizationCard from '../components/OrganizationCard';
import Grid from '@mui/material/Grid';
import { Org } from '../utils/types';

const Organizations = () => {
  usePageTitle('Organizations');
  const [userInfo] = useUserInfo();

  return (
    <>
      <Header title={'Organizations'} />

      {userInfo && (
        <Grid container spacing={2}>
          {userInfo?.orgs.map((org: Org) => (
            <Grid item xs={4} key={org.login}>
              <OrganizationCard org={org} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Organizations
