import { createContext, useContext, useEffect, useState } from "react";
import firebaseApp from '../../firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
const auth = getAuth(firebaseApp);



export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error ("No hay proveedor");
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const signup = (email, password, rol) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => 
        signInWithEmailAndPassword (auth,email, password)
    
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email);
    }
    
    return (
        <authContext.Provider value={{signup, login, user, resetPassword}}>{children}</authContext.Provider>
    );
}
