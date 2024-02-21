import React, { useEffect, useState } from "react";
import WOW from "wow.js";

export const Management = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const cardsData = [
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faComputer}
      //       className="text-blue-400"
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: " Quality Craftsmanship",
      description:
        "Vagus Bags are crafted with precision and passion, using high-quality materials that stand the test of time. Our commitment to durability ensures that your bag becomes a reliable companion on every journey, no matter how adventurous.",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faDesktop}
      //       className="text-blue-400"
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Innovative Design",
      description:
        "Experience travel with a touch of sophistication. Vagus Bags are not just about functionality; they're a statement of style. Our innovative designs blend modern aesthetics with practical features, ensuring you travel in both comfort and fashion.",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Functionality Redefined",
      description:
        "  From smartly organized compartments to easy-access pockets, Vagus Bags are designed with your convenience in mind. Experience hassle-free travel with bags that anticipate your needs, making your journey as enjoyable as the destination itself.",
    },
    
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Community of Explorers",
      description:
        "When you choose Vagus Bags, you join a community of like-minded adventurers. Share your travel stories, get tips from fellow explorers, and be part of a community that understands the joy of discovering new horizons. Your journey is our inspiration.  ",
    },
  ];
 
  return (
    <>
      <div className=" section pb-10 mt-4" id="diffrence"   style={{ textAlign: "justify", textJustify: "auto" }}>
        <div className="">
          <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#ff5c2a] font-bold text-center wow fadeInUp pt-4">
          Why Choose Vagus Bags
          </p>

          <div className="flex flex-wrap justify-center mt-24 wow fadeInUp mx-10 lg:mx-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              {cardsData.map((card, index) => (
                <div className="flex" key={index}>
                  <div
                    className="group  bg-white bg-opacity-5 rounded-lg  shadow-lg transform hover:scale-110 transition-transform duration-500 "
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="text-center p-6 wow fadeInUp">
                      {card.logo}
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-base text-center text-[#ff5c2a] uppercase font-bold mb-2 wow fadeInUp">
                        {card.title}
                      </h3>
                      <p className="text-[#737070] text-center font-semibold text-base p-3 wow fadeInUp">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default  Management;
