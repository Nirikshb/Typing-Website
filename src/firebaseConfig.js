import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChVbZ-WbUpUM_i3IG13Arh5Knr18c85Dk",
  authDomain: "typingspeed-de246.firebaseapp.com",
  projectId: "typingspeed-de246",
  storageBucket: "typingspeed-de246.appspot.com",
  messagingSenderId: "945364561502",
  appId: "1:945364561502:web:e7b3ee3921934fc3a04ecf",
  measurementId: "G-BV62C5JCQY"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
