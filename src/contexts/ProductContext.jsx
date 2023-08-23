import React, { createContext, useState, useEffect } from "react";

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
  const [products, setProducts] = useState([]);
  const [isDetailsPage, setIsDetailsPage] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      const text = await response.text();
      const data = JSON.parse(text, (key, value) => {
        if (key === "price") {
          return toCent(value);
        }

        return value;
      });
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, isDetailsPage, setIsDetailsPage }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
