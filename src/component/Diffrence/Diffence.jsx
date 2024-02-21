import React, { useEffect, useState } from "react";

import WOW from "wow.js";
import {
  IconArrowLeftCircle,
  IconArrowRightCircle,
  IconArrowRightTail,
} from "@tabler/icons-react";
import { Link } from "react-scroll";

export const Luccuage = () => {
  const luccages = [
    {
      imageUrl:"",
      title: "College Daypacks",
     
    },
    {
      imageUrl: ""  , 
      title: "Laptop Backpacks",
      
    },
    {
      imageUrl: "",
      title: "Mini Backpacks",
   
    },
    {
      imageUrl: "",
      title: "Crossbody Sling Backpacks",
     
    },
    {
      imageUrl: "",
      title: "Leather Backpacks",
      
    },
    {
      imageUrl: "",
      title: "Carry-on Backpacks",
    
    },
    {
      imageUrl: "",
      title: "Personal Item Backpacks",
    
    },
    {
      imageUrl: "",
      title: "Wheeled Backpacks",
    
    },
    {
      imageUrl:"",
      title: "TSA-Friendly Laptop Backpacks",
  
    },
    {
      imageUrl: "",
      title: " Lightweight Foldable Daysacks",
     
    },
    {
      imageUrl: "",
      title: "Trekking/Camping Backpacks",
    
    },
    {
      imageUrl: "",
      title: "Military Tactical Backpacks",
     
    },
    {
      imageUrl: "",
      title: "Drawstring Gymsacks",
    
    },
    {
      imageUrl: "",
      title: "Hydration packs",
    
    },
    {
      imageUrl: "",
      title: "Running Backpacks",
      
    },
    // Add more destinations as needed
  ];

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const scrollRight = () => {
    const container = document.getElementById("cardsContainer");
    if (container) {
      container.scrollBy({
        left: 300, // Adjust this value to suit your scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    const container = document.getElementById("cardsContainer");
    if (container) {
      container.scrollBy({
        left: -300, // Adjust this value to suit your scroll distance
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section id="Designs">
        <div
          className=" bg-[#F7F7F7] section pb-10 p-12"
          id="whyme"
          style={{ textAlign: "justify", textJustify: "auto" }}
        >
          <div className="">
            <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#ff5c2a] font-bold text-center wow fadeInUp pt-4">
              Luggages
            </p>
            <div className="text-base text-[#7B7B7B] text-center mt-3 font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
              Quality finishes, stylish designs, budget-friendly.
            </div>

            <div
              class="flex justify-center relative"
              style={{ overflowX: "hidden" }}
            >
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#ff5c2a] rounded-full p-2  transition duration-500 hover:scale-125 "
              >
                <IconArrowLeftCircle className="text-white" />
              </button>
              <div
                className="flex flex-row overflow-x-auto space-x-4 no-scrollbar p-4 max-w-screen-xl mx-auto"
                id="cardsContainer"
              >
                {luccages.map((card, index) => (
                  <div
                    key={index}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow "
                    style={{
                      flex: "0 0 auto",
                      width: "calc(70% / 3)",
                      minWidth: "100px",
                      maxWidth: "100%",
                      borderRadius:"30px"
                    }}
                  >
                    
                      <img
                        className=" w-full h-40 object-cover p-10"
                        src={card.imageUrl}
                        alt=""
                      />
              
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 ">
                          {card.title}
                        </h5>
                      </a>
                     <div className="flex items-center justify-center mt-4">
                      <Link
                       to="contactme"
                       spy={true}
                       smooth={true}
                        className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ff5c2a] rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300  transform transition duration-500 hover:scale-125"
                      >
                        Contact Us
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                    </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={scrollRight}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ff5c2a] rounded-full p-2   transition duration-500 hover:scale-125"
                >
                  <IconArrowRightCircle className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Luccuage;
