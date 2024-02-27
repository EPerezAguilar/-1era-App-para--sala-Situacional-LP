import { Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Navbar from './components/Navbar/Navbar';
import MyRoutes from './routes/MyRoutes';
import {AuthProvider} from './components/contex/authContex'



const navArrayLinks = [
  { title: "Home", path: "/", icon: <HomeIcon /> },
  { title: "Login", path: "/login", icon: <LoginIcon />},
  { title: "View", path: "/view", icon: <AppRegistrationIcon />},
  { title: "Registro", path: "/register", icon: <AppRegistrationIcon />}

]

function App() {
 

  return (
    <>
    <AuthProvider>
      <Navbar navArrayLinks={navArrayLinks}/>
        <Container sx={{mt: 5}}>
          <h3>Esto Siempre estará acá</h3>
          <MyRoutes />
        </Container>
    </AuthProvider>
      
    </>
  )
}

export default App
