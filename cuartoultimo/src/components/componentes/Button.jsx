import firebaseApp from '../../firebase/credenciales';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(firebaseApp)

export function ButtonSingOut() {
  return (
    <button onClick={() => signOut(auth)}>Cerrar Sesión</button>
  )
}

export function ButtonOption( {isRegister}) {
    return(
        <input
          type='submit'
          value={isRegister ? "Registrar" : "Iniciar Sesión" }
        />
    )
}

export function ButtonSing( {isRegister, setIsRegister}) {
  return (
    <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Ya tengo cuenta" :  "Aperturar usuario"}

      </button>
  )
}
