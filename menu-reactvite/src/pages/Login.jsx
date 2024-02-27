import React, { useState } from 'react'
import { ButtonOption, ButtonSing} from '../components/Button';
// import { RegistrarUsuario } from '../components/RegistarUsuario';
import firebaseApp from '../components/firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {getFirestore, doc, setDoc} from 'firebase/firestore';
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


function Login() {
  
  const [isRegister, setIsRegister] = useState(false);

  async function registrarUsuario(email, password, rol) {
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

  function submitHandle(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;
    console.log("###########################################################################################" ,email ,password, rol)
    
    if (isRegister) {
      registrarUsuario ( email, password,rol);
    }else {
      signInWithEmailAndPassword (auth, email, password)
    }

  }
  return (

    <div>
      <h2>{ isRegister ? "Registro" : "Iniciar Sesión"}</h2>

      <form onSubmit={submitHandle}>
        <label>
          Correo electrónico: <input type='email' id='email' />
        </label>
        <label>
          Contraseña: <input type='password' id='password'/>
        </label>
        <label>
          Rol: 
          <select id='rol'>
            <option disabled value='dev'>Desarrolador</option>
            <option disabled value='admin'>Administrador</option>
            <option value='superv'>Supervisor</option>
            <option value='direct'>Director</option>
          </select>
        </label>
        <ButtonOption
          isRegister={isRegister}/>
      </form>
      
      <ButtonSing
        isRegister={isRegister}
        setIsRegister={setIsRegister} 
      /> 
      
      
    
    </div>
  )
}

export default Login