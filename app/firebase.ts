// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXwsAdZGTj-8cSVv3NYetNe7c8YELVOfA",
  authDomain: "my-portfolio-6826a.firebaseapp.com",
  projectId: "my-portfolio-6826a",
  storageBucket: "my-portfolio-6826a.appspot.com",
  messagingSenderId: "136560606618",
  appId: "1:136560606618:web:d50aeff7e8dd73d2df0e23",
  measurementId: "G-H7B0MMSBGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);