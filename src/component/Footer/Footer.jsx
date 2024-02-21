import React, { useEffect } from "react";
import footerImage from "../img/bag logo.jpeg";
import WOW from "wow.js";
import "./Footer.scss";
import { Link  } from "react-router-dom";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandX,
} from "@tabler/icons-react";

function Footer() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="mx-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>

      <footer className=" py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          <div className="mx-auto w-full max-w-screen-xl  py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 p-14">
                <a href="" className="flex items-center wow fadeInUp">
                  <img
                    src={footerImage}
                    alt="Footer Logo"
                    className="h-24 brightness-200"
                  />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-24 gap-y-8 sm:gap-24 sm:grid-cols-2 sm:p-10 p-10">
                <div>
                  <h2 className="mb-4 text-lg font-semibold text-black wow fadeInUp">
                    Link
                  </h2>
                  <ul className="wow fadeInUp">
                    <li>
                      <Link
                        className="  font-semibold font-sans cursor-pointer"
                        to="home"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3 ">
                          Home
                        </div>
                      </Link>
                    </li>
                  
                    <li>
                      <Link
                        className=" font-semibold font-sans cursor-pointer"
                        to="/"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3">
                          {" "}
                          About
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" font-semibold font-sans cursor-pointer"
                        to="/"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3 ">
                          {" "}
                          Designs
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" font-semibold font-sans cursor-pointer"
                        to="/"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3">
                          {" "}
                          Why Realty
                        </div>
                      </Link>
                    </li>
                    
                    <li className="">
                      <Link
                        className=" font-semibold font-sans cursor-pointer"
                        to="/"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3 ">
                          {" "}
                          Layout{" "}
                        </div>
                      </Link>
                    </li>
                     <li className="">
                      <Link
                        className=" font-semibold font-sans cursor-pointer"
                        to="/"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3 ">
                          {" "}
                          Contact Us{" "}
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-4 text-lg font-semibold text-black wow fadeInUp">
                    Legal
                  </h2>
                  <ul className="wow fadeInUp">
                    <li>
                      <Link
                        className="  font-semibold font-sans cursor-pointer"
                        to="/privacypolicy"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3 ">
                          Privacy Policy
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold font-sans cursor-pointer"
                        to="/terms&conditions"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3 ">
                          Terms & Conditions
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" font-semibold font-sans cursor-pointer"
                        to="/license"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3">
                          {" "}
                          Licensing
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" font-semibold font-sans cursor-pointer"
                        to="/cookiespolicy"
                      >
                        <div className="text-gray-500 hover:text-[#ff5c2a] mb-3 ">
                          {" "}
                          Cookies Policy
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-lg text-black sm:text-center">
              &copy; {new Date().getFullYear()}{" "}
                <span className="hover:underline text-[#ff5c2a]">Vagus Realty</span>.
                All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-[#ff5c2a] ">
                  <IconBrandFacebook size={30} />
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff5c2a]  ms-5"
                >
                  <IconBrandInstagram size={30} />
                  <span className="sr-only">Instgram page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff5c2a]  ms-5"
                >
                  <IconBrandX size={30} />

                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff5c2a]  ms-5"
                >
                  <IconBrandLinkedin size={30} />
                  <span className="sr-only">limkdin account</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff5c2a]  ms-5"
                >
                  <IconBrandYoutube size={30} />
                  <span className="sr-only">youtube account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
