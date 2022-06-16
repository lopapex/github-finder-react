import { FC, useMemo } from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ThemeSwitch from './ThemeSwitch';
import { useTheme } from '../hooks/useTheme';
interface Item {
  children?: React.ReactNode;
}

const Layout: FC<Item> = ({ children }) => {
  const navigate = useNavigate();
  const [mode, ] = useTheme();
	const isDark = useMemo(() => mode === 'dark', [mode]);

  return (
    <>
      <AppBar style={{ background: isDark ? '#272727' : '#2E3B55' }}>
        <Container maxWidth='lg'>
          <Toolbar disableGutters sx={{ gap: 2 }}>
            <Typography sx={{ cursor: 'pointer' }} variant='h5' onClick={() => navigate('/')}>Github Finder</Typography>

            <Box sx={{ flexGrow: 1 }} />

            <ThemeSwitch />
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        maxWidth='lg'
        component='main'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          pt: 8,
          gap: 2,
        }}
      >
        {children}
      </Container>
    </>
  );
};
export default Layout;
