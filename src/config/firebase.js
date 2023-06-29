// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzz9-Lwhct3T59Yx_EcIP4ZqmZWpLzNvk",
  authDomain: "noteitdown-26f4c.firebaseapp.com",
  projectId: "noteitdown-26f4c",
  storageBucket: "noteitdown-26f4c.appspot.com",
  messagingSenderId: "317947652552",
  appId: "1:317947652552:web:e6f0f1df42136b850138fd",
  measurementId: "G-3CN3FTFR7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Firebase Authentication 
export const auth = getAuth(app);
export const db = getFirestore(app);


