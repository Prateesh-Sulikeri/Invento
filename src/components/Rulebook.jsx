import React from "react";
import ruleBook from "../../public/images/ruleBook3.png";
import curvedArrow from "../../public/images/curvedArrow.png";
import pdf from "../../public/pdf/rulebook.pdf";
import FlyInOnScroll from "./FlyInOnScroll";
import zap from "../../public/images/zap1.png";
import amazing from "../../public/images/Amazing.png";
import "./components.css";

const Rulebook = () => {
  return (
    <section id="rulebook" className="py-12 mb-8 relative">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center relative">
        {/* Adding the amazing image to the top left */}
        <img
          src={amazing}
          alt="Amazing"
          className="absolute top-0 left-0 mt-4 ml-4 wiggle-animate amazing-image hidden md:block"
        />
        <div className="md:w-1/2 md:mb-0 md:flex md:items-center relative">
          <FlyInOnScroll>
            <img
              src={ruleBook}
              alt="Rulebook"
              className="mx-auto rounded-lg md:pt-0 pt-12 md:pl-20"
              style={{ width: "100%" }}
            />
            <img
              src={curvedArrow}
              alt="Curved Arrow"
              className="absolute top-0 right-0 pt-6 pr-6 md:hidden"
              style={{ width: "100px", zIndex: 10 }}
            />
          </FlyInOnScroll>

          <p
            className="absolute top-0 right-0 md:hidden text-lg font-bold pl-8 mr-4 font-gorditas"
            style={{ paddingRight: "20px" }}
          >
            Download the Rulebook
          </p>
        </div>

        <div className="md:w-1/2 md:ml-8">
          <FlyInOnScroll>
            <h2 className="text-6xl text-center mb-4 hidden md:block font-bangers">
              Rulebook
            </h2>
          </FlyInOnScroll>

          <FlyInOnScroll>
            <p className="text-2xl text-left text-gray-700 mb-6 hidden md:block font-oregano">
            Dive into the 📜 Rulebook, where the laws of our cosmic competition are penned with the ✨ ink of enchantment! Unravel the secrets, wield your talents, and let the pages of greatness turn with every spellbinding rule! 🌟
            </p>
          </FlyInOnScroll>

          <div className="flex justify-center ">
            {" "}
            {/* Adjusted justify-center for mobile */}
            <FlyInOnScroll>
              <a
                href={pdf}
                target="_blank"
                className={`mr-4 py-2 px-4 bg-black text-white rounded-lg border font-oregano border-blue-400 focus:outline-none flex items-center justify-center transition-transform duration-200 transform hover:scale-105`}
              >
                Download Rulebook
              </a>
            </FlyInOnScroll>
          </div>
        </div>

        {/* Add the zap image to the bottom right */}
        <img
          src={zap}
          alt="Zap"
          className={`absolute bottom-0 right-0 mb-4 mr-4 zap-animate zap-expand hidden md:block`}
          style={{ width: "100px" }}
        />
      </div>
    </section>
  );
};

export default Rulebook;
