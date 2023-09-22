// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu0dxdwSFXd0Y2vcIgdJhEpejrwmfsyd8",
  authDomain: "inventoryx-d4d50.firebaseapp.com",
  projectId: "inventoryx-d4d50",
  storageBucket: "inventoryx-d4d50.appspot.com",
  messagingSenderId: "1069044239696",
  appId: "1:1069044239696:web:0ef8bc1aac03c5eca17055",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { app, db };
