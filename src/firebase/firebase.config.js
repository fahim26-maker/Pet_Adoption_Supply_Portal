// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWjdWWKJ3z4_7Q7xW9rcInZVjgdS-hVfc",
  authDomain: "pet-adoption-supply-portal.firebaseapp.com",
  projectId: "pet-adoption-supply-portal",
  storageBucket: "pet-adoption-supply-portal.firebasestorage.app",
  messagingSenderId: "755980407094",
  appId: "1:755980407094:web:344d0ea4dea5bd69bfe397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;