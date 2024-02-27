import firebaseApp from '../firebase/credenciales';
import {getFirestore, doc, getDoc, firebaseApp} from 'firebase/firestore'
const firestore = getFirestore (firebaseApp);

async function GetInfoRol ({uid}) {
    const docRef = doc(firestore, `usuario/${uid}`);
    const docCifrada = await getDoc(docRef);
    const infoFinal = docCifrada.data().rol;
    
    return (infoFinal);
}


export default GetInfoRol


