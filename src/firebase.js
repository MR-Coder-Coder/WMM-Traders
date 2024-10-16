// firebase.js - Firebase Initialization
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAiEOlwry54Bay4hMxt4NQXYjaPRdOLrfE",
    authDomain: "wmm-traders.firebaseapp.com",
    projectId: "wmm-traders",
    storageBucket: "wmm-traders.appspot.com",
    messagingSenderId: "236720886037",
    appId: "1:236720886037:web:45c27a5c8c34dfb7c3d91c",
    measurementId: "G-CSJR2Q85QH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

// Initialize Firestore and export it
export const db = getFirestore(app);