// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbSrEWg3KsnBvNU-WSKRupjnaoHzSuCT4",
  authDomain: "stackhelp-11ea6.firebaseapp.com",
  projectId: "stackhelp-11ea6",
  storageBucket: "stackhelp-11ea6.appspot.com",
  messagingSenderId: "685430501643",
  appId: "1:685430501643:web:a7009e97d5b8eded8e720e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider() 