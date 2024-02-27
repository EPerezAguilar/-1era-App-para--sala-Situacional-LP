import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import PersistentDrawerLeft from "./components/Header2";
import NavTabs from "./components/NavTabs";



import { BrowserRouter, Routes } from "react-router-dom";
import OnAuthComponent from './components/onAuthComponent';



function App() {

  return (
    <OnAuthComponent />
    //  <BrowserRouter>
    //    <NavTabs />  

    //      <Routes>
    //        <Route path="/" element={<Home/>}/>
        
    //        <Route path="/register" element={<Register />}/>
    //        <Route path="/login" element={<Login />}/>
    //      </Routes>

    //      <footer> Este es el footer</footer>
    //    </BrowserRouter>

   
  );
}

export default App;
