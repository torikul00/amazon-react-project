// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtOH71DbVF8ggtJO0SAldoLPV6Hbdr_lw",
  authDomain: "ema-john-project-b4348.firebaseapp.com",
  projectId: "ema-john-project-b4348",
  storageBucket: "ema-john-project-b4348.appspot.com",
  messagingSenderId: "144090397401",
  appId: "1:144090397401:web:44897ff53e697bd6995cc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)

export default auth;