import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Organizations from '../pages/Organizations';
import Repos from '../pages/Repos';
import NotFound from '../pages/NotFound';

const MyRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/organizations' element={<Organizations />} />
      <Route path='/repos' element={<Repos />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
