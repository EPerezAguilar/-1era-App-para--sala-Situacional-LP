
import { createContext, useContext, useEffect, useState } from "react";

export  const AuthContext = createContext();

export function AuthContextProvider({children}){

  const signUp = (email, password, rol) => {
    console.log(email, password, rol)
  }
  
  return (
    <AuthContext.Provider value={{signUp}}>
        {children}
    </AuthContext.Provider>
  )
}
 
export const UserAuth =()=>{
    const context = useContext(AuthContext)
    if (!context) throw new Error ('No hay usuario')
    return context;

}