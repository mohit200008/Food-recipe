import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
   .........
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export { projectFirestore }
