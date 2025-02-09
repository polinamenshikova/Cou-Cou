import React, { useEffect, useState } from "react";

import Link from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { clearCart } from "../redux/cartSlice";

const PaymentSuccessfull = () => {
  const [cart, setCart] = useState([]);
  const [cartTotalAmount, setCartTotalAmount] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    const savedCartTotalAmount = localStorage.getItem("cartTotalAmount");

    const parsedCartItems = JSON.parse(savedCartItems);
    setCart(parsedCartItems);

    const parsedCartTotalAmount = JSON.parse(savedCartTotalAmount);
    setCartTotalAmount(parsedCartTotalAmount);

    dispatch(clearCart());
  }, [dispatch]);

  return (
    // <div className="container lg:h-screen md:h-screen flex flex-col mx-auto mt-32 mb-10 sm:mt-20 lg:px-20 xl:px-3">
    //   <div className="flex justify-start item-start space-y-2 flex-col md:ml-5">
    //     <h1 className="text-3xl md:ml-0 lg:ml-0 dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
    //       Thank you for your order!
    //     </h1>
    //   </div>
    //   <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    //     <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
    //       <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
    //         <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
    //           Order Summary
    //         </p>
    //         {cart.map((item) => {
    //           return (
    //             <div
    //               className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
    //               key={item.id}
    //             >
    //               <div className="pb-4 md:pb-8 w-full md:w-40">
    //                 <img
    //                   className="w-full hidden md:block"
    //                   src={item.image}
    //                   alt="dress"
    //                 />
    //                 <img
    //                   className="w-40 md:hidden"
    //                   src={item.image}
    //                   alt="dress"
    //                 />
    //               </div>
    //               <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
    //                 <div className="w-full flex flex-col justify-start items-start space-y-8">
    //                   <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
    //                     {item.title}
    //                   </h3>
    //                 </div>
    //                 <div className="flex justify-between space-x-8 items-start w-full">
    //                   <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
    //                     {item.quantity}
    //                   </p>
    //                   <p className="text-base dark:text-white xl:text-lg  leading-6 text-gray-800">
    //                     ${item.price / 100}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //       <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
    //         <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
    //           <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
    //             Summary
    //           </h3>
    //           <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
    //             <div className="flex justify-between w-full">
    //               <p className="text-base dark:text-white leading-4 text-gray-800">
    //                 Subtotal
    //               </p>
    //               <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
    //                 ${cartTotalAmount / 100}
    //               </p>
    //             </div>
    //             <div className="flex justify-between items-center w-full">
    //               <p className="text-base dark:text-white leading-4 text-gray-800">
    //                 Shipping
    //               </p>
    //               <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
    //                 $8.00
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex justify-between items-center w-full">
    //             <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
    //               Total
    //             </p>
    //             <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
    //               ${(cartTotalAmount / 100 + 8).toFixed(2)}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
    //           <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
    //             Shipping
    //           </h3>
    //           <div className="flex justify-between items-start w-full">
    //             <div className="flex justify-center items-center space-x-4">
    //               <div className="w-8 h-8">
    //                 <img
    //                   className="w-full h-full"
    //                   alt="logo"
    //                   src="https://i.ibb.co/L8KSdNQ/image-3.png"
    //                 />
    //               </div>
    //               <div className="flex flex-col justify-start items-center">
    //                 <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
    //                   Fedex Delivery
    //                   <br />
    //                   <span className="font-normal">
    //                     Delivery with 24 Hours
    //                   </span>
    //                 </p>
    //               </div>
    //             </div>
    //             <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
    //               $8.00
    //             </p>
    //           </div>
    //           <div className="w-full flex justify-center items-center">
    //             <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
    //               View Carrier Details
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-50 py-6 min-h-[calc(100vh-64px)]">
      <div className="content-container flex flex-col justify-center items-center">
        <div className="max-w-4xl h-full bg-white w-full">
          OrderDetails Items
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 border-b border-gray-200"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
            <div>
              <h2 className="text-base-semi">Need help?</h2>
              <div className="text-base-regular my-2">
                <ul className="gap-y-2 flex flex-col">
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/contact">Returns & Exchanges</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessfull;
