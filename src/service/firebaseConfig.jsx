// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ijjH0rbNKLXcmdmnrUKlNjZl56NH-8A",
  authDomain: "travel-buddy-90bea.firebaseapp.com",
  projectId: "travel-buddy-90bea",
  storageBucket: "travel-buddy-90bea.firebasestorage.app",
  messagingSenderId: "252020407085",
  appId: "1:252020407085:web:4bf48425b7b8505ac1f1a4",
  measurementId: "G-1WXKLVZGHP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);