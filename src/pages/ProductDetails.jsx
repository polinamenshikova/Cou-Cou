import React, { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";

import { ProductContext } from "../contexts/ProductContext";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/cartSlice";

import { setIsActive } from "../redux/iconSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const { id } = useParams();

  const { products } = useContext(ProductContext);

  useEffect(() => {
    dispatch(setIsActive(true));
  });

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 md:h-screen lg:h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price / 100}
            </div>
            <p className="mb-8"> {description} </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-primary py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
