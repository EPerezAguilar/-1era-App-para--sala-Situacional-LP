import React from 'react'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'

import SignUp from '../pages/Register'
import View from '../pages/view/View'
import SignIn from '../pages/Login'
import { useAuth } from '../components/contex/authContex'
import ForgotPassword from '../pages/ForgotPassword'
import Home from '../pages/Home'
import ViewA from '../pages/view/ViewA'
import ViewD from '../pages/view/ViewD'
import ViewS from '../pages/view/Views'
import ViewSJ from '../pages/view/ViewSJ'
import ResgistrarEscuelas from '../pages/RegistrarEscuelas'


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
            <Route path='forgot-password' element = {<ForgotPassword/>}></Route>
            <Route path= "/register-escuela" element = {<ResgistrarEscuelas />}></Route>
           
          </Routes>
  )
}