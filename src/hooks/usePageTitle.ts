import { useEffect } from 'react';


const usePageTitle = (title: string) => {
	useEffect(() => {
		document.title = `${title} | BarberShop}`;
	}, [title]);
};

export default usePageTitle;
