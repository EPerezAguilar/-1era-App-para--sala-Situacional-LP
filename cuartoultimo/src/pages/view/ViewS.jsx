import { ButtonSingOut } from '../../components/componentes/Button'
import { useAuth } from '../../components/contex/authContex'


function ViewS() {
  const {user}= useAuth()

  return (
    <div>
        <h2>Bienvenido, Supervisor, {user.email}</h2>
        <ButtonSingOut/>    
    </div>
    
    )
}

export default ViewS