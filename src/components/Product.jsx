import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/cartSlice";

import { setIsActive } from "../redux/iconSlice";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;

  const { setIsOpen } = useContext(SidebarContext);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify center items-center">
          <div className="w-[255px] md:w-[200px] mx-auto flex justify-center items-center">
            <img
              className="scale-150 group-hover:scale-[1.7] transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 bg-red-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => {
              handleAddToCart(product);
              setIsOpen(true);
            }}
          >
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3x1" />
            </div>
          </button>
          <div className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-x1">
            <Link to={`/product/${id}`} onClick={dispatch(setIsActive(true))}>
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500"> {category} </div>
        <Link to={`/product/${id}`} onClick={dispatch(setIsActive(true))}>
          <h2 className="font-semibold mb-1"> {title} </h2>
        </Link>
        <div className="font-semibold"> $ {price / 100} </div>
      </div>
    </div>
  );
};

export default Product;
