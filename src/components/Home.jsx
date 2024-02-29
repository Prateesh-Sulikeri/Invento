import React, { useRef, useState, useEffect } from "react";
import hero from "../../public/images/hero1.png";
import bg from "../../public/images/bg_home.jpg";
import "./components.css";

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
      className="text-center bg-cover bg-center h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto mb-12 md:pt-16">
        <div className="explosion-container">
          <img
            className={`explosion-image ${explosion ? 'explode' : ''} ${final ? 'final' : ''} ${expandContract ? 'expand-contract' : ''}`}
            src={hero}
            alt='Explosion'
            style={{ width: isMobile ? '150%' : '75%', maxWidth: '150%' }} // Adjust width based on mobile view
          />
        </div>
      </div>
    </section>
  );
}

export default Home;


// import React, { useRef, useState, useEffect } from "react";
// import hero from "../../public/images/hero1.png";
// import bg from "../../public/images/bg_home.jpg";
// import star from "../../public/images/star.png";
// import Confetti from 'react-confetti';
// import "./components.css";

// const Home = () => {
//   const homeSectionRef = useRef(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [explosion, setExplosion] = useState(false);
//   const [final, setFinal] = useState(false);
//   const [expandContract, setExpandContract] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
  
//   useEffect(() => {
//     const handleExplosion = () => {
//       setTimeout(() => {
//         setFinal(true);
//         setTimeout(() => {
//           setExpandContract(true);
//           setTimeout(() => {
//             setShowConfetti(true);
//           }, 200); 
//         }, 1000); 
//       }, 1000); 
//     };

//     // Initial call to handleExplosion function
//     handleExplosion();

//     // Event listener for window resize
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Define mobile as window width less than or equal to 768px
//     };

//     // Initial call to set initial mobile state
//     handleResize();

//     // Add event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section
//       id="home"
//       ref={homeSectionRef}
//       className="text-center bg-cover bg-center h-screen flex items-center justify-center overflow-hidden"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <div className="container mx-auto mb-12 md:pt-16">
//         <div className='explosion-container'>
//           <img
//             className={`explosion-image ${explosion ? 'explode' : ''} ${final ? 'final' : ''} ${expandContract ? 'expand-contract' : ''}`}
//             src={hero}
//             alt='Explosion'
//             style={{ width: isMobile ? '150%' : '75%', maxWidth: '150%' }} // Adjust width based on mobile view
//           />
//           <div className="particles-container">
//             {[...Array(30)].map((_, index) => (
//               <div className="particle" key={index}></div>
//             ))}
//           </div>
//           {showConfetti && (
//             <Confetti
//               width={window.innerWidth}
//               height={window.innerHeight}
//               numberOfPieces={500}
//               recycle={false}
//               gravity={0.2}
//             />
//           )}
//         </div>
//       </div>
//       <img
//         src={star}
//         alt="Star"
//         className="absolute top-[22%] right-[15%] md:top-[15%] md:right-[27%] w-12 md:w-[5%] animate-twinkle-initial" 
//       />
//       <img
//         src={star}
//         alt="Star"
//         className="absolute bottom-[40%] left-8 md:bottom-[15%] md:left-[30%] w-16 animate-twinkle-alternate"
//       />
//     </section>
//   );
// }

// export default Home;
