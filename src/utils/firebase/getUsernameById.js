import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default async function getUsernameById(userId) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().username; // استرجاع اسم المستخدم
    } else {
        console.log("No such document!");
        return null;
    }
}
