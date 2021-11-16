import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


  const firebaseConfig = {
    apiKey: "AIzaSyAynMj6BOVWTQc6E4GFcaogHRET0IoaQp0",
    authDomain: "user-admin-ee273.firebaseapp.com",
    projectId: "user-admin-ee273",
    storageBucket: "user-admin-ee273.appspot.com",
    messagingSenderId: "6815593599",
    appId: "1:6815593599:web:a9799bdad2fc549a883b4a",
    measurementId: "G-MNGJMH5376"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);