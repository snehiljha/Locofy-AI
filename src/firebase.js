// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    getAuth
   } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrdibYWn97FE05DkBqzzu-9oVUdp2klgg",
  authDomain: "fir-react-authentication-6d8f6.firebaseapp.com",
  projectId: "fir-react-authentication-6d8f6",
  storageBucket: "fir-react-authentication-6d8f6.appspot.com",
  messagingSenderId: "54202959322",
  appId: "1:54202959322:web:50164b97223af3acfface3",
  measurementId: "G-92P4MJXW1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user)
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err.code == "auth/user-not-found") {
        await registerWithEmailAndPassword(email, password)
      }
      console.error(err.code);
      alert(err.code);
    
    }
};

const logout = () => {
    signOut(auth);
};

export {
  app,
  auth,
  logout,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword
}

const analytics = getAnalytics(app);