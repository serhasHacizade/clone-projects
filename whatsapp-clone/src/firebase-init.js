import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDpkIVWRjGqIv-WVL2ZM85Muh2U8qWcmZ8",
  authDomain: "whatsapp-clone-ac4c0.firebaseapp.com",
  projectId: "whatsapp-clone-ac4c0",
  storageBucket: "whatsapp-clone-ac4c0.appspot.com",
  messagingSenderId: "415613457430",
  appId: "1:415613457430:web:1ff59ac27e107348f1d137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }