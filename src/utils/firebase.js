import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, writeBatch } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

/////////////////////////////////////////////////////
// function for getting all items in any collectionn
export async function getCollectionByName(collectionName) {
  let collectionArray = [];
  try {
    const Collection = collection(db, collectionName);
    const collectionSnapshot = await getDocs(Collection)
    collectionArray = collectionSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (e) { console.log(e.message) }
  return collectionArray;
}

/////////////////////////////////////////////////////////
// function for adding full list to any collectionn(empty)
export async function addCollection(collectionArray, collectionName) {
  try {
    const Collection = collection(db, collectionName);
    const querySnapshot = await getDocs(Collection);

    if (querySnapshot.empty) {
      const batch = writeBatch(db);

      collectionArray.forEach((item) => {
        const docRef = doc(db, collectionName, item.title);
        batch.set(docRef, item);
      });

      await batch.commit();
    } else {
      console.log("Products already exist in this collection.");
    }
  } catch (e) { console.error(e.message); }
};

////////////////////////////////////
//function to get username by userID
export async function getUsernameById(userId) {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().username; // استرجاع اسم المستخدم
  } else {
    console.log("No such document!");
    return null;
  }
}

//////
//auth
export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      alert(error.message);
    });
};

export async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      alert(error.message);
    });
};