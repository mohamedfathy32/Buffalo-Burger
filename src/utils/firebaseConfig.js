import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF3h_8mHGGs4REC-nJ2Fgk3ofBu5E9cwI",
  authDomain: "buffalo-burger-73090.firebaseapp.com",
  projectId: "buffalo-burger-73090",
  storageBucket: "buffalo-burger-73090.appspot.com",
  messagingSenderId: "813583745340",
  appId: "1:813583745340:web:1dcf4735da6b53193fde39",
  measurementId: "G-NFHVQGTH7D"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)