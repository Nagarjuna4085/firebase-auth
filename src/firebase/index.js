import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAMIK_yDbPUZoYXydDjmGEE-WDSrqUopJ4",
  authDomain: "vue-firebase-auth-f1666.firebaseapp.com",
  projectId: "vue-firebase-auth-f1666",
  storageBucket: "vue-firebase-auth-f1666.appspot.com",
  messagingSenderId: "388425541774",
  appId: "1:388425541774:web:5dd18e4c987e2e537801df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {
    auth
}