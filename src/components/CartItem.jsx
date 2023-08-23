import React from "react";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

const CartItem = ({
  item,
  handleRemoveItemFromCart,
  handleDecreaseAmount,
  increaseAmount,
}) => {
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-ligh text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <div>
          <img src={item.image} alt="" className="max-w-[80px]" />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
              {item.title}
            </div>
            <div
              onClick={() => handleRemoveItemFromCart(item.id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => handleDecreaseAmount(item)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {item.quantity}
              </div>
              <div
                onClick={() => increaseAmount(item)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-around">
              ${item.price / 100}
            </div>

            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              ${item.subtotal / 100}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
