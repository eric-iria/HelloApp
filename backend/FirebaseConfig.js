// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { signInWithEmailAndPassword, initializeAuth, getReactNativePersistence, 
    createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBctsXhx9KK-VbkrPPeglzMcT10KrtregM",
  authDomain: "helloapp-d75c3.firebaseapp.com",
  projectId: "helloapp-d75c3",
  storageBucket: "helloapp-d75c3.firebasestorage.app",
  messagingSenderId: "845102546152",
  appId: "1:845102546152:web:5061bfdfbc5e00aa7edd5d",
  measurementId: "G-FBGX5Q743T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


const banco = getFirestore(app);
export {app, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, banco};