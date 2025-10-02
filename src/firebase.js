// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <-- 1. IMPORTA ESTO

const firebaseConfig = {
    apiKey: "AIzaSyCpfaaPHDHntMh6fm92185BSZUafTQaToM",
    authDomain: "universo8090-59410.firebaseapp.com",
    projectId: "universo8090-59410",
    storageBucket: "universo8090-59410.firebasestorage.app",
    messagingSenderId: "282125525553",
    appId: "1:282125525553:web:e9bb85aa3b9a6bf9142b10",
    measurementId: "G-WTXVNDGJVQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); // <-- 2. AÑADE ESTA LÍNEA