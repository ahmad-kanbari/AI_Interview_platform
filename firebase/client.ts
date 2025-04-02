// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfVy7gznEnJyXTsc4ZuFfDV7i2RVwCUFg",
  authDomain: "prepwise-31d4c.firebaseapp.com",
  projectId: "prepwise-31d4c",
  storageBucket: "prepwise-31d4c.firebasestorage.app",
  messagingSenderId: "958632902481",
  appId: "1:958632902481:web:3079a54c5542dd5bd6dd70"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);