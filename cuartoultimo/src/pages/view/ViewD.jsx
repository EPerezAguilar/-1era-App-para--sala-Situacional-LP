import { ButtonSingOut } from '../../components/componentes/Button'
import { useAuth } from '../../components/contex/authContex'


function ViewD() {
  const {user}= useAuth()

  return (
    <div>
        <h2>Bienvenido, Director, {user.email}</h2>
        <ButtonSingOut/>    
    </div>
    
    )
}

export default ViewD