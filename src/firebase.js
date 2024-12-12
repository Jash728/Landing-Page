// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVx1FIDZNOqAH4D14GBtf_MWy_3fq4kS0",
  authDomain: "content-media-3fa18.firebaseapp.com",
  projectId: "content-media-3fa18",
  storageBucket: "content-media-3fa18.firebasestorage.app",
  messagingSenderId: "271313082966",
  appId: "1:271313082966:web:3ba1cc0cca8157c04339f7",
  measurementId: "G-53EJWTSLFY"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app, { region: "us-central1" });

export { auth, googleProvider };