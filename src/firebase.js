
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoZbKdEVvLBnMxNdtN5I5JygUK2cJKLb0",
    authDomain: "github-users-4e941.firebaseapp.com",
    projectId: "github-users-4e941",
    storageBucket: "github-users-4e941.appspot.com",
    messagingSenderId: "620947183549",
    appId: "1:620947183549:web:70303ad7495695562024d4",
    measurementId: "G-4VZMC7JD9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const auth = getAuth(app);
export { auth };