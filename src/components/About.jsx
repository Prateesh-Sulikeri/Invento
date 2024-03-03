import React from "react";
import bg from "../../public/images/bg_about.jpg";
import FlyInOnScroll from "./FlyInOnScroll";

const About = () => {
  return (
    <section
      id="about"
      className="text-center bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-1/2 md:px-8">
        <FlyInOnScroll>
          <h2 className="text-5xl md:text-6xl mb font-bangers">About</h2>
        </FlyInOnScroll>
        <FlyInOnScroll>
          <p className="text-lg md:text-xl py-4 md:py-10 font-oregano">
            INVENTO, the legendary inter-collegiate fest, presents its Comic
            Themed Edition! Calling all comic fans, artists, and storytellers!
            Battle it out in creative contests and workshops. Show off your
            artistic chops and storytelling skills. Win the ultimate prize:
            Overall Champions! Get ready to be inspired, inked, and victorious!
            Details coming soon!
          </p>
        </FlyInOnScroll>
      </div>
    </section>
  );
};

export default About;
