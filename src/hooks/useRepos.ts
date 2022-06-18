import { useEffect, useState } from 'react';
import { getRepos } from '../utils/github-api';
import { useUserInfo } from './useUserInfo';

const usePageTitle = () => {
	const [userInfo] = useUserInfo();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [repos, setRepos] = useState([]);

  const findRepos = async () => {
    if (!userInfo) return;
    try {
      setRepos([]);
			setLoading(true);
      const repos = await getRepos(userInfo.user.login);
			setError('');
			setRepos(repos);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
			setError(e.response.data.message);
    } finally {
			setLoading(false);
		}
  }

  useEffect(() => {
    findRepos();
  }, []);

  return {loading, error, repos, setError}
};

export default usePageTitle;
