import { Dispatch, FormEvent, SetStateAction } from 'react';
import { getUserData } from '../utils/github-api';
import { useUserInfo } from './useUserInfo';

const usePageTitle = (setLoading: Dispatch<SetStateAction<boolean>>, setError: Dispatch<SetStateAction<string>>) => {
  const [, setUserInfo] = useUserInfo()

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
  return {findUser};
}

export default usePageTitle
