import React, { useEffect } from "react";
import WOW from "wow.js";
import "./Landing.scss";
import india from "../img/bag2.png"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";


function Landing() {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const text = "Vagus Realty";
  return (
    <>
      <section id="home">
      <div className="w-full md:bg-fixed md:w-full">
        
          <div className="mx-2 md:mx-5 flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 p-5 mt-4 md:mt-10 leading-10">
              <div className="leading-8 mt-24">
                <div className="text-black text-4xl md:text-5xl font-black font-sans wow fadeInUp">
           Elevate Your Journey
                </div>
                <div className="text-black text-4xl md:text-5xl font-bold font-sans wow fadeInUp mt-2">
                  With <span className="text-[#FFC500]">with Vagus Bags</span>
                </div>
                <div className="text-gray-500 text-2xl md:text-2xl font-bold font-sans wow fadeInUp mt-5">
                Style, Durability, Adventure
                </div>
               
                {/* <img
                  src={shape}
                  alt="Side Image"
                  className="photo one md:hidden"
                /> */}
                <div className="">
                  <div
                    className="flex gap-3 mt-4 md:mt-6 wow fadeInUp"
                  
                  >
                    <a
                      href="https://instagram.com/vagusimmigrations?igshid=MTI1ZDU5ODQ3Yw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 text-black hover:text-[#70C64F]"
                    >
                      <IconBrandInstagram size={40} className="" />
                    </a>
                    <a
                      href="https://www.facebook.com/vagusimmigrations?mibextid=ZbWKwL
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 text-black  hover:text-[#70C64F]"
                    >
                      <IconBrandFacebook size={40} variant="Bold" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/vagus-immigrations/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 text-black  hover:text-[#70C64F]"
                    >
                      <IconBrandLinkedin size={40} />
                    </a>
                    <a
                      href="https://twitter.com/VAGUSIMMIG46592?t=PkW5gNapZCSd0zVVoZzBHw&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 hover:text-[#70C64F] text-black :text-[#FFC500]"
                    >
                      <IconBrandX size={40} />
                    </a>
                    <a
                      href="https://youtube.com/@VagusImmigrations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 text-black  hover:text-[#70C64F]"
                    >
                      <IconBrandYoutube size={40} />
                    </a>
                  </div>
                </div>
               
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img src={india} alt="Side Image" className="max-w-full h-auto" />
            </div>
          </div>
     
        </div>
      </section>
    </>
  );
}

export default Landing;
