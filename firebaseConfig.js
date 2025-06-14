
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDaqIIihqZgqMSZik40iWrK6BStooBlgis",
  authDomain: "saynex-8faee.firebaseapp.com",
  projectId: "saynex-8faee",
  storageBucket: "saynex-8faee.firebasestorage.app",
  messagingSenderId: "487484960615",
  appId: "1:487484960615:web:12448efa071d4ddd8289c2"
};

export const dbConfig = initializeApp(firebaseConfig);

