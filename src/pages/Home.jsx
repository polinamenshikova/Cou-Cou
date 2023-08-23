import React, { useContext, useEffect } from "react";

import { ProductContext } from "../contexts/ProductContext";

import Product from "../components/Product";

import Hero from "../components/Hero";

import { useDispatch } from "react-redux";

import { setIsActive } from "../redux/iconSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useContext(ProductContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60
        ? dispatch(setIsActive(true))
        : dispatch(setIsActive(false));
    });

    window.addEventListener("popstate", () => {
      dispatch(setIsActive(true));
    });
  });

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
