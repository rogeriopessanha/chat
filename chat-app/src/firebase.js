


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm7SUhGJU2mLpWHuyvqP_Rz-0VFoMIgVc",
  authDomain: "chat-c64da.firebaseapp.com",
  projectId: "chat-c64da",
  storageBucket: "chat-c64da.appspot.com",
  messagingSenderId: "864039150113",
  appId: "1:864039150113:web:51ac4104b80039e46b7960"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()