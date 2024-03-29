import React from "react";
import bg from "../../public/images/bg_cal2.jpg";
import date1Image from "../../public/images/date1.png";
import date2Image from "../../public/images/date2.png";
import date3Image from "../../public/images/date3.png";
import FlyInOnScroll from "./FlyInOnScroll";

import "./components.css";

const Calendar = () => {
  return (
    <div
      className="containerS min-h-screen py-8 font-bangers text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <FlyInOnScroll>
        <h1
          className="text-5xl font-semibold text-center mb-[5%]"
          style={{
            WebkitTextStrokeWidth: "0.2px",
            WebkitTextStrokeColor: "black",
          }}
        >
          Mark Your Calendar
        </h1>
      </FlyInOnScroll>

<FlyInOnScroll>
<div className="md:grid md:grid-cols-6  gap-4">
        <div className= "w-80 mx-auto md: col-span-2  relative rounded-lg bgdate md:mb-4">
          <img
            src={date1Image}
            alt="Date"
            className="w-full h-full rounded-t-lg m-0"
          />
          <div className="absolute bottom-0 left-0 mx-10 right-0 p-4">
            <p className="text-xl text-black mx-2 mb-10  sm:mb-16">
            Various Heros from different dimensions join together to triumph over challenges and gain victory
            </p>
          </div>
        </div>

        <div className="w-80 mx-auto md:col-span-2  relative rounded-lg bgdate md:mb-4">
          <img
            src={date2Image}
            alt="Date"
            className="w-full h-full rounded-t-lg m-0  "
          />
          <div className="absolute bottom-0 left-0 mx-10 right-0 p-4">
            <p className="text-xl text-black mx-2 mb-10  sm:mb-14"> 
            From superheroes to anime icons,explore the creativity and ingenuity of all arenas            </p>
          </div>
        </div>

        <div className=" w-80 mx-auto  md:col-span-2  relative rounded-lg bgdate md:mb-4">
          <img
            src={date3Image}
            alt="Date"
            className="w-full h-full rounded-t-lg m-0"
          />
          <div className="absolute bottom-0 left-0 mx-10 right-0 p-4 ">
            <p className="text-lg text-black mx-2 mb-10  sm:mb-14">
            Witness the comic culture unravel, as battles are fought in all fields across all timelines, ending is a majestic celebration            </p>
          </div>
        </div>

        
      </div>
</FlyInOnScroll>
    
    </div>
  );
};

export default Calendar;