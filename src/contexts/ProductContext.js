import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isDetailsPage, setIsDetailsPage] = useState(false);

  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      const data = await response.json();
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
