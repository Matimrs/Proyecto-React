import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAtdm-tDF8JRNZSc5x0Hl7t1FQQrDJHsjk",
  authDomain: "proyecto-coderhouse-reac-9d267.firebaseapp.com",
  projectId: "proyecto-coderhouse-reac-9d267",
  storageBucket: "proyecto-coderhouse-reac-9d267.appspot.com",
  messagingSenderId: "1044790954380",
  appId: "1:1044790954380:web:0270f62895cd50e50eeea9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
