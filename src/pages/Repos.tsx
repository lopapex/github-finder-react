import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ErrorAlert from '../components/ErrorAlert';
import Header from '../components/Header';
import usePageTitle from '../hooks/usePageTitle';
import useRepos from '../hooks/useRepos';
import { Repo } from '../utils/types'

const Repos = () => {
	usePageTitle('Public repos');
  const {repos, loading, error, setError} = useRepos();

	return (
		<>
      <Header title={'Public repos'} />
      <ErrorAlert error={error} setError={setError} />
      {loading && <CircularProgress color='inherit' />}

      <TableContainer component={Paper}>
        <Table size="small" aria-label="ProvidedServices">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Language</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos?.map((repo: Repo) => (
              <TableRow
                hover
                key={repo.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  cursor: 'pointer'
                }}
                onClick={() => window.open(repo.html_url, '_blank')}
              >
                <TableCell component="th" scope="row">
                  {repo.name}
                </TableCell>
                <TableCell align="right">{repo.language}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
		</>
	);
};


export default Repos;