// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "alpha-furniture-a86e8.firebaseapp.com",
  projectId: "alpha-furniture-a86e8",
  storageBucket: "alpha-furniture-a86e8.appspot.com",
  messagingSenderId: "91885031597",
  appId: "1:91885031597:web:093c01e6856764cbdab624",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
