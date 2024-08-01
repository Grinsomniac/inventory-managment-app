// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ6waiyaYtL5iXwhbb8Hln4hw7xooAuwI",
  authDomain: "inventory-mgmt-1d52a.firebaseapp.com",
  projectId: "inventory-mgmt-1d52a",
  storageBucket: "inventory-mgmt-1d52a.appspot.com",
  messagingSenderId: "356513890017",
  appId: "1:356513890017:web:3140c16310d7b74ae0c1a0",
  measurementId: "G-MCY4FZH445"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app);
export { firestore };
