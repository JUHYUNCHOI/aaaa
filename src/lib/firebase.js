// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-nuCH0ddrDu-SZPcVZN8p7eJBM0eP8Jg",
  authDomain: "my-project-app-63159.firebaseapp.com",
  projectId: "my-project-app-63159",
  storageBucket: "my-project-app-63159.appspot.com",
  messagingSenderId: "202073994666",
  appId: "1:202073994666:web:745abb31de6e7632cda7d3",
  measurementId: "G-VQ5Z3D4JQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);