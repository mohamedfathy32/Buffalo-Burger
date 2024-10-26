import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query, updateDoc, writeBatch } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDF3h_8mHGGs4REC-nJ2Fgk3ofBu5E9cwI",
//   authDomain: "buffalo-burger-73090.firebaseapp.com",
//   projectId: "buffalo-burger-73090",
//   storageBucket: "buffalo-burger-73090.appspot.com",
//   messagingSenderId: "813583745340",
//   appId: "1:813583745340:web:1dcf4735da6b53193fde39",
//   measurementId: "G-NFHVQGTH7D",
// };

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
export const auth = getAuth(app);

/////////////////////////////////////////////////////
// function for getting all items in any collectionn
export async function getCollectionByName(collectionName) {
  let collectionArray = [];
  try {
    const Collection = collection(db, collectionName);
    const orderedQuery = query(Collection, orderBy("sortOrder"));
    const collectionSnapshot = await getDocs(orderedQuery);

    collectionArray = collectionSnapshot.docs.map(doc => ({ ...doc.data() }));
  } catch (e) { console.log(e.message); }
  return collectionArray;
}

/////////////////////////////////////////////////////////
// function for adding full list to any collectionn(empty)
export async function addCollection(collectionArray, collectionName) {
  try {
    const Collection = collection(db, collectionName);
    const querySnapshot = await getDocs(Collection);
    const batch = writeBatch(db);
    collectionArray.forEach((item, index) => {
      const docRef = doc(db, collectionName, item.title.en);
      batch.set(docRef, { ...item, sortOrder: index });
    });
    await batch.commit();
  } catch (e) { console.log(e.message); }
}


////////////////////////////////////
//function to get username by userID
export async function getUsernameById(userId) {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().username;
  } else {
    console.log("No such document!");
    return null;
  }
}

////////////////////////
//function to get user informations by userID
export async function getUserInfoById(userId) {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      username: data.username,
      email: data.email,
      phoneNumber: data.phone,
    };
  } else {
    console.log("No such document!");
    return null;
  }
}

//////////////
// function udpate user profile

export async function updateUserProfile(userId, newUsername) {
  try {
    const userDocRef = doc(db, "users", userId);

    await updateDoc(userDocRef, {
      username: newUsername,
    });

    console.log("User profile updated successfully in Firestore!");
  } catch (error) {
    console.error("Error updating user profile in Firestore: ", error);
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
}

export async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      alert(error.message);
    });
}