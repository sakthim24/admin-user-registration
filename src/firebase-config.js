import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0rbSaUSt6r220ztDr-eI22qTfE1swtXk",
  authDomain: "users-register-89b19.firebaseapp.com",
  projectId: "users-register-89b19",
  storageBucket: "users-register-89b19.appspot.com",
  messagingSenderId: "683350381466",
  appId: "1:683350381466:web:462cd3490f40c01126a023",
  measurementId: "G-Y9PZ88DYQ9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);