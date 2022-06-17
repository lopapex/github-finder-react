import { useEffect } from 'react';

const usePageTitle = (title: string) => {
	useEffect(() => {
		document.title = `${title} | GithubFinder}`;
	}, [title]);
};

export default usePageTitle;
