import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './pages/Login'
import Ayuda from './pages/Ayuda'
import SignUp from './pages/Register'
import View from './pages/view'
// import { UserAuth } from './context/AuthContext'
import Home from './pages/Home'

export default function MyRoutes() {
    // const {user} = UserAuth();
    // const RequireAuth = ({children}) =>{
    //     return user ? children : <Navigate to={"/login"} />;
    // }
  return (
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<SignIn />}/>
                <Route path='/ayuda' element={<Ayuda/> }/>
                <Route path='/register' element={<SignUp /> } />
                <Route path='/view' element={<View />}></Route>
            </Routes>
    </BrowserRouter>
    
  )
}
