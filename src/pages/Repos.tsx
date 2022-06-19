import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ErrorAlert from '../components/ErrorAlert';
import Header from '../components/Header';
import usePageTitle from '../hooks/usePageTitle';
import useRepos from '../hooks/useRepos';
import { Repo } from '../utils/types';

const Repos = () => {
  usePageTitle('Public repos')
  const { repos, loading, error, setError } = useRepos()

  return (
    <>
      <Header title={'Public repos'} />
      <ErrorAlert error={error} setError={setError} />
      {loading ? (
        <CircularProgress color='inherit' />
      ) : (
        <TableContainer component={Paper} sx={{ mb: '24px', mt: '-34px' }}>
          <Table size='small' aria-label='Public repos' stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align='left'><strong>Name</strong></TableCell>
                <TableCell align='right'><strong>Language</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repos.map((repo: Repo) => (
                <TableRow
                  hover
                  key={repo.name}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  <TableCell component='th' scope='row'>
                    {repo.name}
                  </TableCell>
                  <TableCell align='right'>{repo.language}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

export default Repos
