// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhuxi5d_HxOjPAIEfxa9aTJ9DvBPdjM7k",
  authDomain: "netflix2-b1d9c.firebaseapp.com",
  projectId: "netflix2-b1d9c",
  storageBucket: "netflix2-b1d9c.appspot.com",
  messagingSenderId: "601851727926",
  appId: "1:601851727926:web:f43d28a062f9919a65c897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);