import React, { useState } from "react";
import eventsByType from "../eventData";
import { Link } from "react-router-dom";
import bg from "../../public/images/bg_events.png";
import buttonImage from "../../public/images/button.png"; // Import button image
import FlyInOnScroll from "./FlyInOnScroll";
import { IoEarthSharp, IoBulbSharp, IoFlameSharp } from "react-icons/io5";
import "./components.css"; // Import your CSS file

const Events = () => {
  // Define state to track the selected tag
  const [selectedTag, setSelectedTag] = useState("All");

  // Filter events based on the selected tag
  const filteredEvents = Object.entries(eventsByType)
    .filter(([eventType, events]) => {
      // Check if the selected tag is "All" or if the event has the selected tag
      return selectedTag === "All" || events.tag.includes(selectedTag);
    })
    .map(([eventType, events]) => (
      <FlyInOnScroll key={eventType}>
        <div key={eventType} className="relative items-center">
          <div
            className="relative bg-cover bg-no-repeat bg-center w-full m-2 rounded-lg drop-shadow-2xl shadow-2xl"
            style={{
              backgroundImage: `url(${events.image})`,
              paddingBottom: "66.67%",
              borderRadius: "20px",
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 p-4 bg-black opacity-85 rounded-b-lg flex justify-between items-center"
              style={{
                zIndex: 1,
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <h2
                className="text-white font-marker text-xl md:text-2xl lg:text-3xl font-bold mb-2"
                style={{ zIndex: 5 }}
              >
                {eventType}
              </h2>
              <Link to={`/events/${eventType}`}>
                <img
                  src={buttonImage}
                  alt="See Events"
                  className="cursor-pointer w-16 h-auto md:w-20 lg:w-24"
                  style={{ width: "70px", height: "auto", zIndex: 5 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </FlyInOnScroll>
    ));

  return (
    <div
      id="events"
      className="py-[25%] md:py-[5%] px-4 md:px-12"
      style={{
        backgroundImage: `url(${bg})`,
        opacity: 0.9,
        width: "100%",
        height: "100%",
      }}
    >
      <FlyInOnScroll>
        <h2 className="text-6xl tex pb-4 font-bangers text-center">
          Explore The Events
        </h2>
      </FlyInOnScroll>
      <div className="flex justify-center py-4 mb-4">
        {/* Selection tabs */}
        {[
  { tag: "All", icon: <IoEarthSharp /> },
  { tag: "Technical", icon: <IoBulbSharp /> },
  { tag: "Cultural + fun", icon: <IoFlameSharp /> },
].map(({ tag, icon }) => (
  <FlyInOnScroll key={tag}>
    <button
      key={tag}
      className={`mr-4 py-2 px-4 bg-black text-white rounded-lg border border-blue-400 focus:outline-none flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:font-semibold ${
        selectedTag === tag ? 'bg-orange-600' : ''
      }`}
      style={{ minWidth: "100px", fontFamily: "Oregano" }}
      onClick={() => setSelectedTag(tag)}
    >
      <span className="mr-2">{tag}</span>
      <span>{icon}</span>
    </button>
  </FlyInOnScroll>
))}

      </div>
      <FlyInOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {filteredEvents}
        </div>
      </FlyInOnScroll>
    </div>
  );
};

export default Events;
