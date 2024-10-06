// import { useEffect } from "react";
// import { productsList } from "../utils/ProdList";
// import { addDoc, collection, getDocs, query } from "firebase/firestore";
// import { db } from "../utils/firebase";

export default function Loyalty() {
    // useEffect(() => {
    //     const addProductsToDB = async () => {
    //         try {
    //             // استعلام لجلب المنتجات من قاعدة البيانات
    //             const q = query(collection(db, "product"));
    //             const querySnapshot = await getDocs(q);

    //             // إذا كانت قاعدة البيانات فارغة، أضف البيانات من productList
    //             if (querySnapshot.empty) {
    //                 for (const product of productsList) {
    //                     await addDoc(collection(db, "product"), product);
    //                 }
    //                 console.log("Products added to the database.");
    //             } else {
    //                 console.log("Products already exist in the database.");
    //             }
    //         } catch (error) {
    //             console.error("Error adding products: ", error);
    //         }
    //     };

    //     addProductsToDB();
    // }, []);



    return (
        <>
        
            <div>Loyalty</div>
        </>
    );
}
