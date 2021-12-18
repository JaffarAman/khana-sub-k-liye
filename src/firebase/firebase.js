// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfYPxlFpZVtk3oMqlLgNvQGA6wfAc9th0",
  authDomain: "khanasubkyliye.firebaseapp.com",
  projectId: "khanasubkyliye",
  storageBucket: "khanasubkyliye.appspot.com",
  messagingSenderId: "131832807199",
  appId: "1:131832807199:web:77bfd61b73112b31977a2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

///AUTH FIREBASE
const auth = getAuth();
const db = getFirestore();

export {auth , db}