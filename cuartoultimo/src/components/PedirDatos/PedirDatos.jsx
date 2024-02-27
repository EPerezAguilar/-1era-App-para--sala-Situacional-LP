import firebaseApp from '../../firebase/credenciales';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
const firestore = getFirestore(firebaseApp);

function GetInfor(){
    [info, setInfo] = useState([])

      const getInfo = async() => {
        try 
          {
            const querySnapshot = await getDocs(collection(firestore, 'DatosPlanteles'));
          const docs = []
          querySnapshot.forEach( (doc) =>{
            const {CantAdministrativo, 
              CantDocentes,
              CantEstudiantes,
              CantObreros,
              Director,
              Nombre,
              NumPlantel} = doc.data()
              docs.push({
                id:doc.id,
                CantAdministrativo, 
                CantDocentes,
                CantEstudiantes,
                CantObreros,
                Director,
                Nombre,
                NumPlantel
              })
          });
          setInfo(docs);
        } catch (error) {
          console.log(error)
        }
  
    
      } 

      getInfo()
      console.log(info)

    return info
    
  
  
  
}

export default GetInfor
   