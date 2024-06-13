import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxmEQUoBkuhtPPwLEOZ7uX_21leBb119M",
    authDomain: "whatsapp-clone-426305.firebaseapp.com",
    projectId: "whatsapp-clone-426305",
    storageBucket: "whatsapp-clone-426305.appspot.com",
    messagingSenderId: "451065922280",
    appId: "1:451065922280:web:be703e0a6109e543823f5d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }