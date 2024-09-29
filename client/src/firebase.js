// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2aae4.firebaseapp.com",
  projectId: "mern-estate-2aae4",
  storageBucket: "mern-estate-2aae4.appspot.com",
  messagingSenderId: "1020681365832",
  appId: "1:1020681365832:web:7d3c812511d7367a662b7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);