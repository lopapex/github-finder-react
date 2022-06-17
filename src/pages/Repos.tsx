import Header from '../components/Header';
import usePageTitle from '../hooks/usePageTitle';

const Repos = () => {
	usePageTitle('Public repos');

	return (
		<>
      <Header title={'Public repos'} />
		</>
	);
};


export default Repos;
