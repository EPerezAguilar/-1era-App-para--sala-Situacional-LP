import { ButtonSingOut } from '../components/componentes/Button'
import { useAuth } from '../components/contex/authContex'

function View() {
  const {user}= useAuth()
  
  return (
    <div>
      <h2>home, {user.email}</h2>

      <ButtonSingOut/>
      
      
      
    </div>
  )
}

export default View