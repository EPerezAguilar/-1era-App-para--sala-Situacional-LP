import { createContext, useContext, useEffect, useState } from "react";
import firebaseApp from '../../firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp)



export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error ("No hay proveedor");
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [erol, setErol] = useState("")
    const signup = (email, password, rol) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => 
        signInWithEmailAndPassword (auth,email, password)
        const getrol = async (uid) => {
            const docRef = doc(firestore, `user/${uid}`)
            const docCifrada = await getDoc(docRef);
            const infoFinal = docCifrada.data();
            return infoFinal;
        }
        const setUserWithFirebaseAndRol = (usuarioFirebase)=>{
            getrol(usuarioFirebase.uid).then((rol) =>{
                const userData = {
                    uid: usuarioFirebase.uid,
                    email: usuarioFirebase.email,
                    rol: rol
                };
                setUser(userData)
                setErol(userData.rol.rol)
            })
        }
    useEffect(() => {
        onAuthStateChanged(auth, usuarioFirebase => {
            if( usuarioFirebase){
                setUserWithFirebaseAndRol(usuarioFirebase)
                setUser(usuarioFirebase)
                
            } else {
                setUser(null)
            }
        })
        
    }, [])
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email);
    }
    const addOrEditLink = ({linkObjet}) => {
        setDoc(doc(firestore,"DatosPlanteles"), ({linkObjet}))
        console.log("ok")
    }
    return (
        <authContext.Provider value={{signup, login, user, resetPassword, erol, addOrEditLink}}>{children}</authContext.Provider>
    );
}
