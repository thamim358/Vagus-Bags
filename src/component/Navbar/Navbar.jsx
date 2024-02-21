import React, { useState, useEffect, useRef } from "react";
import WOW from "wow.js";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import "../Header/Header.scss";

import LOGO from "../img/bag logo.jpeg";


const { TabPane } = Tabs;

function NavBar() {
  const textShadowStyle = {
    textShadow: "4px 2px 6px rgba(0, 0, 0, 0.3)", // Adjusted shadow values
  };
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  useEffect(() => {
    const closeMobileMenu = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("click", closeMobileMenu);

    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
  }, [isMobileMenuOpen]);
  const [members, setMembers] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  const [cities, setCities] = useState(0);
  const [childrenHelped, setChildrenHelped] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Incrementing the counters until they reach 100
      if (members < 100) {
        setMembers((prevMembers) =>
          prevMembers < 100 ? prevMembers + 1 : 100
        );
      }
      if (volunteers < 100) {
        setVolunteers((prevVolunteers) =>
          prevVolunteers < 100 ? prevVolunteers + 1 : 100
        );
      }
      if (cities < 100) {
        setCities((prevCities) => (prevCities < 100 ? prevCities + 1 : 100));
      }
      if (childrenHelped < 100) {
        setChildrenHelped((prevChildren) =>
          prevChildren < 100 ? prevChildren + 1 : 100
        );
      }
    }, 100); // Interval duration to increment by 1

    return () => clearInterval(interval); // Clean up on component unmount
  }, [members, volunteers, cities, childrenHelped]);

  return (
    <>
      <header
        id="Home"
        className=" w-full bg-white nav-bar sm:w-full z-10 "
      >
        <div className=" sm:mx-auto md:mx-10 lg:mx-20 flex items-center justify-between  ">
          <div className="text-[#ff5c2a] font-black font-mono text-3xl ml-4">
           
            <img src={LOGO} alt="wdwd" className="h-20" />
          </div>
          <nav>
            <div className="flex items-center justify-between md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-black flex justify-end ml-10 hover:text-purple-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 mx-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-6 tracking-widest justify-between items-center `}
            >
              
                    <li>
                      <Link
                        className="  font-semibold font-sans cursor-pointer"
                        to="/"
                        
                      >
                        <div className="text-white hover:text-gray-500 mb-3 bg-[#ff5c2a] py-2 px-4 rounded-xl ">
                          Home
                        </div>
                      </Link>
                    </li>
                   
                  </ul>
             
              
             

             
          
          </nav>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 "
          onClick={toggleMobileMenu}
        ></div>
      )}
      <div className={`overlay-menu ${isMobileMenuOpen ? "open" : "hidden"}`}>
        <div className="flex justify-between p-5 ">
          <div className="text-[#ff5c2a] font-mono font-bold text-3xl ">
          <img src={LOGO} alt="wdwd" className="h-20" />
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:text-[#ff5c2a]  focus:outline-none"
          >
            <svg
              className="w-6 h-6 mx-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* <div className=" "> */}
        <ul className="p-10">
        <li>
                      <Link
                        className="  font-semibold font-sans cursor-pointer"
                        to="/"
                       
                      >
                        <div className="text-white hover:text-gray-500 mb-3 bg-[#ff5c2a] py-2 px-4 rounded-xl">
                          Home
                        </div>
                      </Link>
                    </li>
                  
        </ul>
      </div>


      {/* </div> */}
    </>
  );
}

export default NavBar;
