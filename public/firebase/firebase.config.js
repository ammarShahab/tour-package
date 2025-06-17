// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// .env.local file
/* 
VITE_apiKey=AIzaSyBiyYzVVjfoX157K3Ch2juIsqAur7fr_iI
VITE_authDomain=a11-tripnest-client.firebaseapp.com
VITE_projectId=a11-tripnest-client
VITE_storageBucket=a11-tripnest-client.firebasestorage.app
VITE_messagingSenderId=777068337899
VITE_appId=1:777068337899:web:edc7f10bb7854be838bcae
*/
