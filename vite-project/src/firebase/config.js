// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa15CI_RxZbavDu76r6cFRZNJExdQo4RA",
  authDomain: "maishop-6791e.firebaseapp.com",
  projectId: "maishop-6791e",
  storageBucket: "maishop-6791e.appspot.com",
  messagingSenderId: "973877262751",
  appId: "1:973877262751:web:854531a38e0bde0ccaa5aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);