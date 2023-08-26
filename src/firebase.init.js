// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkIXJu7bP9IijcFiE709wEvLQPr9h4jDo",
  authDomain: "teebay-c902e.firebaseapp.com",
  projectId: "teebay-c902e",
  storageBucket: "teebay-c902e.appspot.com",
  messagingSenderId: "704025413247",
  appId: "1:704025413247:web:f2c201d65f6a885c40a14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;