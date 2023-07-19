import React, { useContext, useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

import { BsBag } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

import { ProductContext } from "../contexts/ProductContext";

import Logo from "../img/logo.svg";
import LogoWhite from "../img/logo2.svg";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const { isDetailsPage, setIsDetailsPage } = useContext(ProductContext);

  console.log("ACTIVE" + isActive);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <div>
          {isActive ? (
            <img className="w-[40px]" src={Logo} alt="" />
          ) : isDetailsPage ? (
            <img className="w-[40px]" src={Logo} alt="" />
          ) : (
            <img className="w-[40px]" src={LogoWhite} alt="" />
          )}
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag
            className={`${
              isActive
                ? "text-black"
                : isDetailsPage
                ? "text-black"
                : "text-white"
            } text-2xl transition-all`}
          />
          <div className="bg-red-500 abosulte -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
