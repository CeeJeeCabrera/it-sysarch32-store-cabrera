// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtezPaVhBkmBQhLGJrOR7zHUAFQwpsuvQ",
  authDomain: "it-sysarch32-store-cabrera.firebaseapp.com",
  projectId: "it-sysarch32-store-cabrera",
  storageBucket: "it-sysarch32-store-cabrera.appspot.com",
  messagingSenderId: "89520756531",
  appId: "1:89520756531:web:18e9e0e82aa6a63060d046",
  measurementId: "G-VDE6RFGQYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);