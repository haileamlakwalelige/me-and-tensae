import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Footers=()=>{
  return(
    <div className='bg-[#01013ae8] h-[110vh] overflow-y-hidden sm:h-[50vh] shadow-2xl font-serif text-white'>
      <div className="bg-[#01013ae8] font-serif shadow-2xl pt-10 justify-center block bottom-0 sticky pb-16">
        <div className="pt-4">
          <h1 className="font-bold text-3xl pb-4 text-center cursor-pointer hover:text-[#04b4fa]"> Haileamlak Waleligne</h1>
          <div className="py-4">
            <ul className="sm:flex flex-col sm:flex-row  items-center justify-center cursor-pointer text-center">
              <a href="#heros">
              <li className="px-3 font-bold py-4 sm:py-0 text-lg hover:text-[#cbcb2c]">Home</li>
              </a>
              <a href="#about">
              <li className="px-3 font-bold py-4 sm:py-0 text-lg hover:text-[#cbcb2c]">About</li>
              </a>
              <a href="#projects">
              <li className="px-3 font-bold py-4 sm:py-0 text-lg hover:text-[#cbcb2c]">Projects</li>
              </a>
              <a href="#service">
              <li className="px-3 font-bold py-4 sm:py-0 text-lg hover:text-[#cbcb2c]">Service</li>
              </a>
              <a href="#skills">
              <li className="px-3 font-bold py-4 sm:py-0 text-lg hover:text-[#cbcb2c]">Skills</li>
              </a>
              <a href="#contact">
              <li className="px-3 font-bold py-4 sm:py-0 text-lg hover:text-[#cbcb2c]">Contact</li>
              </a>
            </ul>
          </div>
          <div className="flex justify-center">
            <a href="https://www.facebook.com/profile.php?id=100026113192333" className="cursor-pointer">
            <FaFacebook size={60} className="font-bold mx-4 p-2 text-black hover:text-[#04b4fa] bg-white rounded-full h-16 w-16"/>
            </a>
            <a href="https://twitter.com/Haileopia" className="cursor-pointer">
            <FaTwitter size={60} className="font-bold mx-4 text-black hover:text-[#04b4fa] bg-white rounded-full p-2 h-16 w-16"/>
            </a>
            <a href="https://www.instagram.com/hailaopia/" className="cursor-pointer">
            <FaInstagram size={60} className="font-bold mx-4 text-black hover:text-[#04b4fa] bg-white rounded-full p-2 h-16 w-16"/>
            </a>
            <a href="https://www.linkedin.com/in/haileamlak-waleligne/" className="cursor-pointer">
              <FaLinkedin size={60} className="font-bold mx-4 text-black hover:text-[#04b4fa] bg-white rounded-full p-2 h-16 w-16"/>
            </a>
          </div>
          <p className="text-center pt-6 font-mono text-lg mb-10">Copyright ©2023 All rights reserved | This Website is made by Haileamalak Waleligne</p>
        </div>
      </div>
    </div>
  )
}

export default Footers;