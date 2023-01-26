// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCSs1PO5uJuW96R0mwVNjJ0KwV1NkeagIE",
  authDomain: "ghuraghuri-2e3c8.firebaseapp.com",
  projectId: "ghuraghuri-2e3c8",
  storageBucket: "ghuraghuri-2e3c8.appspot.com",
  messagingSenderId: "709267040643",
  appId: "1:709267040643:web:55724bf99ec6d182c42eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = app.firebaseConfig.firestore();
// const db = app.firestore();

export default auth;