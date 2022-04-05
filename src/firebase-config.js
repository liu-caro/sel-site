import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'sel-zoo.firebaseapp.com',
    databaseURL: 'https://sel-zoo-default-rtdb.firebaseio.com',
    projectId: 'sel-zoo',
    storageBucket: 'sel-zoo.appspot.com',
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firebaseDB = getDatabase(app);

export { firebaseAuth, firebaseDB };
