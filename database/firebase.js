import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDEmGHDBqs7QueC7wTa46kJz-xSubWO0Ls",
    authDomain: "oso-guides-backend.firebaseapp.com",
    projectId: "oso-guides-backend",
    storageBucket: "oso-guides-backend.appspot.com",
    messagingSenderId: "409693174973",
    appId: "1:409693174973:web:8076ee35bc33040cd18bd4",
    measurementId: "G-XGCWELHRN0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const userAuth = firebase.auth();

  //EXPORTAMOS MODULOS PARA LA BASE DE DATOS
  export default {
    db,
    userAuth,
  }