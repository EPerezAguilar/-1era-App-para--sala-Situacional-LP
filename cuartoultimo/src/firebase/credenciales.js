// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics"; 
//USAR CUANDO SEA NECESARIO

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVajqUQ7gAXnXbk3o1qZMgiUvOwyL7PcU",
  authDomain: "caractsm.firebaseapp.com",
  projectId: "caractsm",
  storageBucket: "caractsm.appspot.com",
  messagingSenderId: "952424995688",
  appId: "1:952424995688:web:03f8696742ad801b2314dd",
  measurementId: "G-7BRJP0MDG5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp); USAR CUANDO SEA NECESARIO

export default firebaseApp;