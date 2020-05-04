import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'



// Llave de firebase para poder acceder a la base de datos que tenemos en ella 
const firebaseConfig = {
  apiKey: "AIzaSyCpOM6MkpUAE0SkmfQKHPy9qNaR4HrWBxE",
  authDomain: "burg-d5429.firebaseapp.com",
  databaseURL: "https://burg-d5429.firebaseio.com",
  projectId: "burg-d5429",
  storageBucket: "burg-d5429.appspot.com",
  messagingSenderId: "337526204226",
  appId: "1:337526204226:web:c59a06d1e31772d4768adb",
  measurementId: "G-KWJR6MFM7H"
};

firebase.initializeApp(firebaseConfig);

 let db= firebase.firestore(); // Conectamos firebase con firestore
  export {db, firebase}