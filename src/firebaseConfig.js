// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKRW2KQ-tNJHs4JmjHwVufATrAaYraj84",
  authDomain: "linkedin-clone-fd1a4.firebaseapp.com",
  projectId: "linkedin-clone-fd1a4",
  storageBucket: "linkedin-clone-fd1a4.appspot.com",
  messagingSenderId: "885483842116",
  appId: "1:885483842116:web:55a903ce203092cccb2a11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage};