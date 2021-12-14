import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey:apikey,
    authDomain: "get-it-done-fb970.firebaseapp.com",
    projectId: "get-it-done-fb970",
    storageBucket: "get-it-done-fb970.appspot.com",
    messagingSenderId: "462868184271",
    appId: "1:462868184271:web:45cf742d08292ff97a0bba"
  };

//init firebase
initializeApp(firebaseConfig)

//initi services
const db = getFirestore()

export { db }