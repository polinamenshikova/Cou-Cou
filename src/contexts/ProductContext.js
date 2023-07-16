import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isViewClicked, setViewClicked] = useState(false);

  const handleClick = () => {
    setViewClicked(true);
  };

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
    <ProductContext.Provider value={{ products, isViewClicked, handleClick }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
