import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//fathy
// const firebaseConfig = {
//   apiKey: "AIzaSyDF3h_8mHGGs4REC-nJ2Fgk3ofBu5E9cwI",
//   authDomain: "buffalo-burger-73090.firebaseapp.com",
//   projectId: "buffalo-burger-73090",
//   storageBucket: "buffalo-burger-73090.appspot.com",
//   messagingSenderId: "813583745340",
//   appId: "1:813583745340:web:1dcf4735da6b53193fde39",
//   measurementId: "G-NFHVQGTH7D"
// };
//mostafa
const firebaseConfig = {
  apiKey: "AIzaSyB938mwob15coVUd54hbLJNzBmRbqhK80M",
  authDomain: "buffalo-burger-432d6.firebaseapp.com",
  projectId: "buffalo-burger-432d6",
  storageBucket: "buffalo-burger-432d6.appspot.com",
  messagingSenderId: "676912297668",
  appId: "1:676912297668:web:abf14165867ae338363b91"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)