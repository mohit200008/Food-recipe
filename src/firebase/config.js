import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBgepOwYAWJXzs1neaFj_1aoiqrV_T27uQ",
    authDomain: "cooking-ninja-e8670.firebaseapp.com",
    projectId: "cooking-ninja-e8670",
    storageBucket: "cooking-ninja-e8670.appspot.com",
    messagingSenderId: "962689665055",
    appId: "1:962689665055:web:1a51d83c37c0022c03ed2a"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export { projectFirestore }