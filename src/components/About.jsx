import React from "react";
import bg from "../../public/images/bg_about.jpg";
import hero from "../../public/images/luffy.png";
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
          <h2 className="text-5xl md:text-6xl mb font-bangers">About </h2>
        </FlyInOnScroll>
        <FlyInOnScroll>
          <p className="text-lg md:text-xl py-4 md:py-10 font-oregano">
            🚀 Welcome to the extraordinary world of Invento! 🎉 Get ready for a
            colossal clash of creativity, athleticism, melody, and groove! The
            grand event is bursting with competitions that will make your
            talents soar higher than a superhero in a comic strip! 🎨✨ Join
            forces with other aspiring artists, fitness fanatics, musical
            maestros, and dance dynamos as we bring the pages of excitement to
            life! The canvas is set for epic battles, rhythmic beats, and moves
            that defy gravity! 🕺🎶
          </p>
        </FlyInOnScroll>
      </div>
    </section>
  );
};

export default About;
