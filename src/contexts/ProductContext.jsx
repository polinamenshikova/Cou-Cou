import React, { createContext, useState } from "react";
import localProducts from "../data/localProducts";

export const ProductContext = createContext();

const toCent = (amount) => {
  const str = amount.toString();
  const [int] = str.split(".");

  return Number(
    amount
      .toFixed(2)
      .replace(".", "")
      .padEnd(int.length === 1 ? 3 : 4, "0")
  );
};

const ProductProvider = ({ children }) => {
  const [isDetailsPage, setIsDetailsPage] = useState(false);

  const [products] = useState(
    localProducts.map((product) => ({
      ...product,
      price: toCent(product.price),
    }))
  );

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
