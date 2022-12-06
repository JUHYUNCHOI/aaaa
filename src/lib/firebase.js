// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3OG-2ezMVkbx5YHGidxEAutiPnkCQbnU",
  authDomain: "coding-girin.firebaseapp.com",
  projectId: "coding-girin",
  storageBucket: "coding-girin.appspot.com",
  messagingSenderId: "26876852001",
  appId: "1:26876852001:web:9c141a4b58023cf48fb060",
  measurementId: "G-R89VJPHP07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
