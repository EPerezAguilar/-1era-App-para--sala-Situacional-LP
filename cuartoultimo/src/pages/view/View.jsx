import { ButtonSingOut } from '../../components/componentes/Button'
import { useAuth } from '../../components/contex/authContex'
import ViewA from './ViewA'
import ViewD from './ViewD'
import ViewS from './Views'
import ViewSJ from './ViewSJ'


function View() {
  const {erol}= useAuth()
  
  return (
    <>
      {erol=== "admin" && <ViewA />}
      {erol=== "supervJ" && <ViewSJ />}
      {erol=== "superv" && <ViewS />}
      {erol=== "direc" && <ViewD />}

      <ButtonSingOut />
      
      
      
      
    </>
  )
}

export default View