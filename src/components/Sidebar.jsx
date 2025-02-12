import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";

import { SidebarContext } from "../contexts/SidebarContext";

import { setIsActive } from "../redux/iconSlice";

import { useSelector, useDispatch } from "react-redux";

import {
  addItem,
  decreaseAmount,
  removeItemFromCart,
  clearCart,
} from "../redux/cartSlice";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItemFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleDecreaseAmount = (cartItem) => {
    dispatch(decreaseAmount(cartItem));
  };

  const increaseAmount = (cartItem) => {
    dispatch(addItem(cartItem));
  };

  const itemAmount = useSelector((state) => state.cartItems.cartTotalQuantity);
  const cartTotalAmount = useSelector(
    (state) => state.cartItems.cartTotalAmount
  );

  const cartItems = useSelector((state) => state.cartItems.cartItems);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[500px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cartItems.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
              handleRemoveItemFromCart={handleRemoveItemFromCart}
              handleDecreaseAmount={handleDecreaseAmount}
              increaseAmount={increaseAmount}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between item-center">
          <div className="uppercase font-semibold">
            <span className="mr-2"> Total: </span>${cartTotalAmount / 100}
          </div>
          <div
            onClick={() => handleClearCart()}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-t1"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link to="/checkout" onClick={dispatch(setIsActive(true))}>
          <div className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium">
            Checkout
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
