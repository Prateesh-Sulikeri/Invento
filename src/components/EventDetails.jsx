import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import bg from "../../public/images/bg_events1.png";
import { IoHome } from "react-icons/io5";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import "./eventDetails.css";
import FlyInOnScroll from "./FlyInOnScroll";
import pdf from "../../public/pdf/rulebook1.pdf"; // Commented out the PDF import

function EventDetails({ eventsByType }) {
  const { eventType } = useParams();
  const events = eventsByType[eventType]?.events || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleKnowMoreClick = () => {
    alert("More information will be available soon.");
  };

  return (
    <div
      className="comic-page"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${bg})`,
        backgroundRepeat: "repeat-y"
      }}
    >
      <div className="container mx-auto py-16 px-4">
        <Link
          to="/"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Back To Home!!"
          data-tooltip-place="bottom"
          className="fixed fixed-button flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white shadow-sm hover:shadow-md transition-all duration-300"
          style={{
            backgroundImage: "url(../../public/images/rbbtn.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            right: "4rem",
            top: "4rem",
            zIndex: "9999", // Ensure the link stays on top
          }}
        >
          <IoHome className="text-xl" />
          <Tooltip id="my-tooltip" />
        </Link>

        <FlyInOnScroll>
          <h1 className="text-6xl font-bangers text-center mb-8">
            <span className="speech-bubble font-Bangers">
              {eventType}
            </span>
          </h1>
        </FlyInOnScroll>
        {events.map((event, index) => (
          <FlyInOnScroll key={event.name}>
            <div
              key={event.name}
              className={`comic-panel flex flex-col-reverse mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              style={{ alignItems: "center", gap: "30px" }}
            >
              <div
                className={`w-full mb-4 md:w-1/2 ${
                  index % 2 === 0 ? "md:order-1 md:pl-4" : "md:order-2 md:pr-4"
                }`}
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:pr-6 md:pl-4">
                <h3 className="text-4xl font-medium mb-4 font-bangers text-center md:text-left">
                  {event.name}
                </h3>
                <p className=" mb-4 text-2xl font-oregano text-center md:text-left">
                  {event.description}
                </p>
                <div className="flex justify-center md:justify-start">
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    className={`mr-4 py-2 px-4 bg-black text-white rounded-lg border border-red-400 font-oregano focus:outline-none flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:font-semibold`}
                    >
                    Register Now
                  </a>
                  {/* Replaced the PDF link with a button that triggers an alert */}
                  <a
                href={pdf}
                target="_blank"
                className={`mr-4 py-2 px-4 bg-blue-100 rounded-lg border font-semibold border-blue-400 font-oregano focus:outline-none flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:font-semibold`}
                >
                Know More
              </a>
                </div>
              </div>
            </div>
          </FlyInOnScroll>
        ))}
      </div>
    </div>
  );
}

EventDetails.propTypes = {
  eventsByType: PropTypes.object.isRequired,
};

export default EventDetails;
