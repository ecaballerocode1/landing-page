// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcKC-2M7Eoe70C-_LHfWVaiYvho45jQvM",
  authDomain: "neuraledge-3afcd.firebaseapp.com",
  projectId: "neuraledge-3afcd",
  storageBucket: "neuraledge-3afcd.firebasestorage.app",
  messagingSenderId: "585226308182",
  appId: "1:585226308182:web:7d2a0bbc719cb30a1ac9f7",
  measurementId: "G-40L21X3CHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };