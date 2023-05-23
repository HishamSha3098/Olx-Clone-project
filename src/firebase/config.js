import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMVnUasLDtENIVMX7ezFQJ29uShpO8L5k",
  authDomain: "olx-clone-afcf5.firebaseapp.com",
  projectId: "olx-clone-afcf5",
  storageBucket: "olx-clone-afcf5.appspot.com",
  messagingSenderId: "401415900693",
  appId: "1:401415900693:web:023d8c3ce97e4064ae081c"
};

export default firebase.initializeApp(firebaseConfig)