import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import MyRoutes from './components/MyRoutes';
import { ThemeProvider } from './hooks/useTheme';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <MyRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
