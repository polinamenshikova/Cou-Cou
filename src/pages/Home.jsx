import React, { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { SidebarContext } from "../contexts/SidebarContext"; // Import Sidebar Context

import Hero from "../components/Hero";
import Product from "../components/Product";

import { useDispatch } from "react-redux";
import { setIsActive } from "../redux/iconSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useContext(ProductContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const handleOutsideClick = (event) => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Keep your existing scroll logic
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60
        ? dispatch(setIsActive(true))
        : dispatch(setIsActive(false));
    });

    window.addEventListener("popstate", () => {
      dispatch(setIsActive(true));
    });
  }, [dispatch]);

  // STEP 1: Filter out women's clothing
  const womensClothing = products.filter(
    (item) => item.category === "women's clothing"
  );

  // STEP 2: Get an array of unique subcategories, e.g. ["hats", "boots", "dresses"]
  const subCategories = [...new Set(womensClothing.map((p) => p.subCategory))];

  return (
    <div onClick={handleOutsideClick} className="relative">
      <Hero />

      {/* STEP 3: Render a section for each subcategory */}
      {subCategories.map((subCat) => {
        // Filter the women's clothing to just those matching the current subcategory
        const subCatProducts = womensClothing.filter(
          (product) => product.subCategory === subCat
        );

        return (
          <section key={subCat} className="py-16">
            <div className="container mx-auto">
              <h2 className="mb-6 text-2xl font-bold capitalize">{subCat}</h2>
              <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {subCatProducts.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Home;
