import React from "react";
import hero from "../../public/images/hero.png";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import FlyInOnScroll from "./FlyInOnScroll";

const Footer = () => {
  
  return (
    <footer className="px-4 py-10 md:py-20 bg-gray-800 text-white " id="footer">
      <FlyInOnScroll>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left section */}
            <div className="col-span-1  flex justify-center items-center md:items-start flex-col">
              <img src={hero} alt="INVENTO" className="w-32 mb-4 justify-centre items-center md:mx-0" />
              <p className="text-2xl text-center font-bangers md:text-left" style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: 'green' }} >Step into Comicopia</p>
            </div>

            {/* Middle section */}
            <div className="col-span-1 mt-6 md:mt-0">
              <h3 className="text-2xl font-bangers mb-4">CONTACT</h3>
              <p className="font-oregano">KLE Technological University</p>
              <p className="font-oregano">Dr. M.S. Sheshgiri College of Engineering and Technology</p>
              <p className="font-oregano">Sumant Gangannavar: 9901878393</p>
              <p className="font-oregano">Rohan Bhavi: 9663709696</p>
              <p className="font-oregano">Sakshi Gudaraddi: 80886 36360</p>
              <p className="font-oregano">Email: invento2k24@gmail.com</p>
            </div>

            <div className="col-span-1 mt-6  md:mt-0">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl  font-bangers mb-4 pr-4">Visual Media</h3>
                  <ul className="hi">
                    <li><a href="https://www.instagram.com/p/C4Azo0vBhw0/?igsh=MTgxdWhkYnM0Y2FsYw==" target="_blank" className="text-blue-300 hover:text-blue-400 font-oregano">Official Poster</a></li>
                    <li><a href="https://www.instagram.com/reel/C4NBYs8qlZN/?igsh=MTN0emlhMWc1ZHJycA%3D%3D" target="_blank" className="text-blue-300 hover:text-blue-400 font-oregano">Promo Video</a></li>
                    <li><a href="https://www.instagram.com/invento_2k24/" target="_blank" className="text-blue-300 hover:text-blue-400 font-oregano">Others</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bangers mb-4 pr-2">Social Media</h3>
                  <ul>
                  <li><a href="https://www.instagram.com/invento_2k24?igsh=MjdiOHU1amE5ZjBj" target="_blank" className="text-blue-300 hover:text-blue-400 flex items-center font-oregano"><FaInstagram className="mr-2" /> Instagram</a></li>
                    <li><a href="https://www.facebook.com/klescetmediaclub" target="_blank" className="text-blue-300  hover:text-blue-400 flex items-center font-oregano"><FaFacebook className="mr-2" /> Facebook</a></li>
                    <li><a href="https://youtube.com/@klescetmedia?si=yedxO7kGc_EtflMl" target="_blank" className="text-blue-300 hover:text-blue-400 flex items-center font-oregano"><FaYoutube className="mr-2" /> Youtube</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-t border-white mt-8 mb-4" />
          <p className="text-center text-lg font-oregano">&copy; Copyright Invento 2024. All rights reserved.</p>
        </div>
      </FlyInOnScroll>
    </footer>
  );
};

export default Footer;