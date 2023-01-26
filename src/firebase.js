// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const auth = getAuth(app);

export default auth;