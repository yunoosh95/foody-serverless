
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "foody-serverless-21857.firebaseapp.com",
  projectId: "foody-serverless-21857",
  storageBucket: "foody-serverless-21857.firebasestorage.app",
  messagingSenderId: "593398141759",
  appId: "1:593398141759:web:880a50087e0441d88a798a",
  measurementId: "G-5F3MFJHZ4G"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
