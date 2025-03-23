import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyAqeKrV1L8wAoDUsBkqo5GC0UoH6Rxt9_Y",
  authDomain:"cpi-it-club.firebaseapp.com",
  projectId:"cpi-it-club",
  storageBucket:"cpi-it-club.firebasestorage.app",
  messagingSenderId:"174708327991",
  appId:"1:174708327991:web:67b167f640be15628261b2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
