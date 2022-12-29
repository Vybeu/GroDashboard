// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU_mrxjnTDzJfgcLnzIQnmydKSGvl630A",
  authDomain: "gro-test-page.firebaseapp.com",
  projectId: "gro-test-page",
  storageBucket: "gro-test-page.appspot.com",
  messagingSenderId: "818531620289",
  appId: "1:818531620289:web:846ef4f468eb3cf4ac4b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
