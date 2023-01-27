


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG97MV0dUtoOWv8_Qin18S_APUKxsrfro",
  authDomain: "chat-3d4a0.firebaseapp.com",
  projectId: "chat-3d4a0",
  storageBucket: "chat-3d4a0.appspot.com",
  messagingSenderId: "416650996097",
  appId: "1:416650996097:web:09f0019a9595a4319b6080"
};  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()