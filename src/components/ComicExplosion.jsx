import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ComicExplosion = ({ children }) => {
  const ref = useRef(null);
  const { inView } = useInView({ threshold: 0.5 }); // Observe 50% of the element

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inView) {
        console.log("Element is in view!");
      }
    }, 300); // Delay by 200 milliseconds (adjust as needed)

    return () => clearTimeout(timeoutId);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="comic-explosion" // Add Tailwind class for styling (optional)
      style={{ position: "relative" }} // Set relative position for child elements
    >
      {children}
      <motion.div
        className="explosion"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: inView ? 1 : 0,
          opacity: inView ? 1 : 0,
          transition: { duration: 0.5 }, // Adjust transition duration as needed
        }}
      >
        <span className="boom">BOOM!</span>
        <motion.div
          className="blast"
          whileInView={{
            scale: [1, 1.2, 0.8, 1], // Sequence of scales for explosion effect
            rotate: [0, 360], // Rotate for spinning effect
            x: [-20, 20], // Add horizontal movement for "jitter"
            y: [-20, 20], // Add vertical movement for "jitter"
            duration: 1, // Adjust duration for blast animation
            repeat: Infinity, // Repeat blast animation infinitely
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ComicExplosion;
