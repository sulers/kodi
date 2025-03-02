// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore functions
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSI0hrmBjgAUZn7VBQvRYPOH2EX4seiOc",
  authDomain: "kodi-45ace.firebaseapp.com",
  projectId: "kodi-45ace",
  storageBucket: "kodi-45ace.firebasestorage.app",
  messagingSenderId: "324366050016",
  appId: "1:324366050016:web:4537c17bd92de116ea2685",
  measurementId: "G-TDMEGNBTWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export the Firestore instance
