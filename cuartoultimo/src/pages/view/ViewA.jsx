import { ButtonSingOut } from '../../components/componentes/Button'
import { useAuth } from '../../components/contex/authContex'


function ViewA() {
    const {user}= useAuth()

  return (
    <div>
        <h2>Bienvenido, Administrador, {user.email}</h2>
        <ButtonSingOut/>    
    </div>
    
    )
}

export default ViewA