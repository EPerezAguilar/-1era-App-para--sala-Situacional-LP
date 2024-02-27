import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/pages/Home'
import View from './components/pages/view'
import SignIn from './components/pages/Login'
import Navbar from './components/Navbar/Navbar'
import { Container } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Ayuda from './components/pages/Ayuda'
import SignUp from './components/pages/Register'
import 'firebase/database';
import 'firebase/auth';
// import OnAuthComponent from './components/pages/onAuthComponent'
// import { AuthContextProvider, UserAuth } from './components/context/AuthContext'
import MyRoutes from './components/MyRoutes'

  

const navArrayLinks = [
  { title: "Home", path: "/", icon: <HomeIcon /> },
  { title: "Login", path: "/login", icon: <LoginIcon />},
  { title: "Ayuda", path: "/ayuda", icon: <AppRegistrationIcon />},
  { title: "Registro", path: "/register", icon: <AppRegistrationIcon />}

]

function App() {
 
  
  return (
    
    <>
      {/* <Navbar navArrayLinks={navArrayLinks}/> */}
      
        <Container sx={{mt: 5}}>
          <h3>Esto Siempre estará acá</h3>
          <MyRoutes />
          
        </Container>
      
      
    </>
    
  )
}

export default App
