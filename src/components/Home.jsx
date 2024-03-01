import React, { useRef, useState, useEffect } from "react";
import hero from "../../public/images/hero1.png";
import bg from "../../public/images/bg_home.jpg";
import "./components.css";
import FlyInOnScroll from "./FlyInOnScroll";

const Home = () => {
  const homeSectionRef = useRef(null);
  const [explosion, setExplosion] = useState(false);
  const [final, setFinal] = useState(false);
  const [expandContract, setExpandContract] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleExplosion = () => {
      setTimeout(() => {
        setFinal(true);
        setTimeout(() => {
          setExpandContract(true);
        }, 1000);
      }, 1000);
    };

    // Initial call to handleExplosion function
    handleExplosion();

    // Event listener for window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile as window width less than or equal to 768px
    };

    // Initial call to set initial mobile state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      ref={homeSectionRef}
      className="text-center bg-cover bg-center h-screen flex items-center justify-center overflow-hidden relative" // Added relative positioning
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto mb-12 md:pt-16">
        <div
          className="explosion-container relative"
          style={{ height: "200px" }}
        >
          {" "}
          {/* Added height to the container */}
          <img
            className={`explosion-image ${explosion ? "explode" : ""} ${
              final ? "final" : ""
            } ${expandContract ? "expand-contract" : ""}`}
            src={hero}
            alt="Explosion"
            style={{ width: isMobile ? "150%" : "75%", maxWidth: "150%" }} // Adjust width based on mobile view
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
