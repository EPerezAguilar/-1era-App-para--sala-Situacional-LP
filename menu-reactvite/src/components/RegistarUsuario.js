import firebaseApp from '../firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(firebaseApp)

export async function RegistrarUsuario({email, password, rol}) {

    const infoUsuario = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
      ).then((usuarioFirebase) => {
        return usuarioFirebase;
      });
    
      console.log(infoUsuario.user.uid);
      const docRef = doc(firestore, `usuario/${infoUsuario.user.uid}`);
      setDoc(docRef, {correo: email, rol: rol})
      
    }