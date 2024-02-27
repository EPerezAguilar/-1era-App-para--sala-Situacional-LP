import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/Register'
import View from '../pages/View'
import SignIn from '../pages/Login'
import { useAuth } from '../components/contex/authContex'
import ForgotPassword from '../pages/ForgotPassword'


export default function MyRoutes() {
    const {user} = useAuth();
    const RequireAuth = ({children}) =>{
      return user ? children : <Navigate to={"/login"} />;
    }
  return (
    
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<SignIn />}/>
            <Route path='/register' element={<SignUp /> } />
            <Route path='/view' element={
              <RequireAuth>
                <View />
              </RequireAuth>}></Route>
            <Route path='forgot-password' element = {<ForgotPassword/>}></Route></Routes>
    
    
  )
}