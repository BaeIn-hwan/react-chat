import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e4b82.firebaseapp.com",
  projectId: "reactchat-e4b82",
  storageBucket: "reactchat-e4b82.appspot.com",
  messagingSenderId: "928236328179",
  appId: "1:928236328179:web:290eb46ef7689b41b0d386",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
