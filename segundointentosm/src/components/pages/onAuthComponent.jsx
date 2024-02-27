// import { useState} from 'react';
// import Login from './Login';
// import firebaseApp from '../../firebase/credenciales';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// // import GetInfoRol from './GetInfo';
// import {getFirestore, doc, getDoc} from 'firebase/firestore'
// import View from './view';
// const auth = getAuth(firebaseApp);
// const firestore = getFirestore (firebaseApp);


// function OnAuthComponent() {

//   const [user, setUser ] = useState(null)

//   console.log(firestore)

//   async function getRol (uid) {
//     const docuRef = doc(firestore, `usuarios/${uid}`);
//           console.log("docuRef Es: " , docuRef)
//     const docuCifrada = await getDoc(docuRef);
//             console.log("docuCifrada Es: " , docuCifrada)
//     const infoFinal = docuCifrada.data();
//           console.log("InfoFinal Es: " , infoFinal)
//     return infoFinal;
// }

//   function setUserWithFirebaseAndRol(usuarioFirebase){
//     getRol (usuarioFirebase.uid).then((rol)=>{
//       const userData = {
//         uid: usuarioFirebase.uid,
//         email: usuarioFirebase.email,
//         rol : rol,
//       };
//       setUser(userData);
//       console.log("este es el usuario final: ", userData)
//     })
//   }


//   onAuthStateChanged(auth, (usuarioFirebase) => {
//     console.log(usuarioFirebase)
//     if (usuarioFirebase) {
//       if(!user){
//         setUserWithFirebaseAndRol(usuarioFirebase)
//       }; 
//     }else {
//       setUser(null)
//     }
//   }
// );
//   console.log("?????????????????????????????????????????????????user",user)
//   return(
//     <> {user ? <View user={user}/> : <Login />}</>
//   )
// }


// export default OnAuthComponent;

import React from 'react'

function onAuthComponent() {
  return (
    <div>onAuthComponent</div>
  )
}

export default onAuthComponent