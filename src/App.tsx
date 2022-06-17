import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import MyRoutes from './components/MyRoutes'
import { ThemeProvider } from './hooks/useTheme'
import { UserInfoProvider } from './hooks/useUserInfo'

const App = () => {
  return (
    <UserInfoProvider>
      <ThemeProvider>
        <BrowserRouter basename="github-finder-react">
          <CssBaseline />
          <Layout>
            <MyRoutes />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </UserInfoProvider>
  )
}

export default App
