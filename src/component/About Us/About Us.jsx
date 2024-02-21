import React, { useEffect } from "react";
import "../Header/Header.scss";
import girl from "../img/Frame 13.png";
import WOW from "wow.js";
import { useNavigate } from "react-router-dom";
import {
    IconArrowElbowRight,
  } from "@tabler/icons-react";

export const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const handleChange = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };
  return (
    <div className="section" id="aboutsection"          style={{ textAlign: "justify", textJustify: "auto" }}>
      <div className="py-10 sm:px-2">
        <div className="p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="image">
            <img
              className=" mt-4 lg:mt-8 w-full mb-4 lg:mb-8  h-96 rounded-2xl wow fadeInUp"
              src={girl}
              alt="Logo Image"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start lg:items-end  ">
            <div className="text-5xl text-[#ff5c2a] font-bold mb-2 lg:mb-6 self-start  wow fadeInUp">
              About 
            </div>
            <div className="text-lg text-black font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
            
            Welcome to Vagus Bags, where every stitch we make, and every design we create, is driven by the passion for enhancing your travel experience. Established with a vision to redefine the way you carry your stories, Vagus Bags is more than a brand; it's a companion on your journey.
            </div>
            <div className="text-2xl text-[#ff5c2a] font-bold mb-2 self-start  wow fadeInUp">
              Our Misssion 
            </div>
            <div className="text-lg text-black font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
            At Vagus Bags, we believe that the true essence of travel lies in the details. Our mission is to provide you with not just bags, but meticulously crafted companions that seamlessly blend style, durability, and functionality. We want to be a part of your every adventure, from the bustling city streets to the serene landscapes.
            </div>
            {/* <button
              className="mt-3 flex gap-2 bg-[#ff5c2a] self-start text-white font-bold py-1 px-4 rounded-full  wow fadeInUp cursor-pointer text-lg transform transition duration-500 hover:scale-125"
              type="submit"
            >
              MORE <IconArrowElbowRight />
              
            </button> */}
          </div>
        
           
         
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
