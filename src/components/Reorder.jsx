import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { db } from "../utils/firebase";
import Splash from "./Splash";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { FaCheckCircle } from 'react-icons/fa';


export default function Reorder() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openAlert, setOpenAlert] = useState(false);
  const { id } = useParams()
  const nav = useNavigate()


  useEffect(() => {
    // Function to fetch the document based on the field value of 'id'
    const fetchDocumentByFieldId = async (collectionName, fieldId) => {
      try {
        // Create a query to search for documents with the specified field ID
        const q = query(
          collection(db, collectionName),
          where("id", "==", fieldId) // Look for documents where the 'id' field matches fieldId
        );

        // Execute the query and get the results
        const querySnapshot = await getDocs(q);

        // Check if any documents were found
        if (!querySnapshot.empty) {
          // Get the data of the first matching document
          const docData = querySnapshot.docs[0].data();
          setOrder(docData); // Set the document data to state
          setLoading(false);
        } else {
          console.log("Document not found!"); // Log if no document matches the criteria
        }
      } catch (error) {
        console.error("Error fetching document:", error); // Handle any errors that occur during fetch
      }
    };

    // Call the fetch function with the collection name and the specific ID
    fetchDocumentByFieldId("orders", id);
  }, [id]);



  const Reorder = () => {
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (savedCart.length == 0) {
      localStorage.setItem('cart', JSON.stringify(order.cart))
    } else {
      savedCart.push(...order.cart)
      localStorage.setItem('cart', JSON.stringify(savedCart))

    }
    setOpenAlert(true)
  }

  const handleClose = () => {
    setOpenAlert(false);
    nav('/cart')
  };


  return (loading ? <Splash /> :
    <>

      <div className="w-full flex justify-center px-2 md:px-10 pt-7 pb-2">

        <div className="w-full flex flex-col md:w-3/5">

          <div className="flex bg-black rounded-t-md p-3">
            <h1 className="PSS text-white tracking-wider uppercase text-5xl">Orders</h1>
          </div>
          <div className="w-full flex flex-col p-1 md:p-4">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-x-4">
              <div className="flex flex-col flex-grow bg-white shadow-md mb-5 px-4 py-5 rounded-2xl">
                <div className="flex flex-col items-start md:flex-row md:items-center my-[5px]">
                  <p className="text-md md:w-1/4">
                    Order ID:</p>
                  <p className="text-lg text-left md:w-3/4 ml-1 font-bold">{order.id}</p>
                </div>
                <div className="flex flex-col items-start md:flex-row md:items-center my-[5px]">
                  <p className="text-md md:w-1/4">
                    Time:</p>
                  <p className="text-lg text-left md:w-3/4 ml-1 font-bold">{order.date}</p>
                </div>
              </div>

              <div className="flex flex-col md:min-w-[20em] lg:min-w-[25em] bg-white shadow-md mb-5 px-4 py-5 rounded-2xl">
                <p className="text-lg">Cash</p>
                <div className="flex flex-col items-start md:flex-row md:items-center my-[5px]">
                  <p className="text-md md:w-1/4">Sub total:</p>
                  <p className="text-lg text-left md:w-3/4 ml-1 font-bold">EGP {(order.totalPrice - order.totalPrice * 0.14).toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-start md:flex-row md:items-center my-[5px]">
                  <p className="text-md md:w-1/4">VAT</p>
                  <p className="text-lg text-left md:w-3/4 ml-1 font-bold">EGP {(order.totalPrice * 0.14).toFixed(2)} </p>
                </div>
                <div className="flex flex-col items-start md:flex-row md:items-center my-[5px]">
                  <p className="text-md md:w-1/4">Total</p>
                  <p className="text-lg text-left md:w-3/4 ml-1 font-bold">EGP {(order.totalPrice).toFixed(2)} </p>
                </div>
                <p>Including VAT</p>
              </div>
            </div>

            <div className="flex flex-col bg-white shadow-md mb-5 px-1 md:px-4 py-5 rounded-2xl">
              <div className="flex flex-col bg-white">

                <div className="flex items-center justify-start">
                  <h3 className="PPS font-bold tracking-wide mr-2">Items</h3>
                </div>

                <div className="w-full bg-[#f7f7f7] flex flex-col p-1 md:grid md:grid-cols-3 justify-between">
                  {order.cart.map((product) => (
                    <>
                      <div key={product.title.en} className="bg-white flex flex-row col-span-2 mb-0 md:mb-2 p-2 rounded-[10px] rounded-b-none md:rounded-b-[10px]">
                        <div>
                          <img alt="Mix N' Match" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" src={product.image} />
                        </div>
                        <div className="flex flex-col">
                          <h3 className=" text-base font-bold px-4 pt-1">{product.title.en}</h3>
                          <p className="text-secondary-gray-60 px-4 text-sm">
                            {product.description.en}
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-b-[10px] md:bg-[#f7f7f7] flex flex-row col-span-1 justify-around items-center">
                        <h5 className="hidden md:block"> {product.quantity}</h5>
                        <h5 className="hidden md:block">{(product.price).toFixed(2)}</h5>
                      </div>
                    </>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-end mt-2">
                  <div className="sm:w-2/5 ">
                  </div>
                  <div className="sm:w-3/5 flex justify-end gap-2">
                    <button className="bg-[#ff5f00] text-white h-9 px-4 font-main text-lg rounded-[10px] disabled:bg-secondary-main-30 " onClick={() => Reorder()} type="button">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      {openAlert &&
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="m-2 shadow"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className="text-center">
              <p className="font-bold text-black"> Your previous order has been added to the cart successfully!</p>
            </DialogContentText>
            <DialogContentText className="flex justify-center">
              <FaCheckCircle className="m-4 text-4xl text-orange-600" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Go to Cart</Button>
          </DialogActions>
        </Dialog>
      }
    </>
  )
}
