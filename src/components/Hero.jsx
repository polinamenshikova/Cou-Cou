import React, { useContext, useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext"; // Import Sidebar Context

const Hero = () => {
  const { setIsOpen } = useContext(SidebarContext); // Get sidebar state setter

  useEffect(() => {
    // Close sidebar when clicking anywhere outside of it
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".sidebar"); // Make sure your sidebar has this class
      if (sidebar && !sidebar.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <section className=" h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="h-[600px] container mx-auto flex justify-around">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-white mr-3"></div>
            <div className="text-white ">New Trend</div>
          </div>
          <h1
            className="text-[70px] leading-[1.1] font-light mb-4 text-white"
            style={{
              textShadow:
                "10px 10px 25px rgba(0,0,0,0.1), -10px 10px 25px rgba(0,0,0,0.5), -10px -10px 25px rgba(0,0,0,0.3), 10px -10px 25px rgba(0,0,0,0.5)",
            }}
          >
            SUMMER SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
