/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import {ImMail} from 'react-icons/im';

const Footers=()=>{
  return(
    <div className='bg-slate-900 pb-1 md:pb-auto overflow-y-hidden sm:h-[52vh] shadow-2xl shadow-gray-400  text-white'>
      <div className="bg-slate-900  shadow-2xl pt-10 justify-center block bottom-0 sticky pb-16">
        <div className="pt-4">
          <h1 className="font-bold text-3xl pb-4 text-center cursor-pointer hover:text-[#04b4fa]"> Haileamlak Waleligne</h1>
          <div className="py-4">
            <ul className="sm:flex flex-col sm:flex-row  items-center justify-center cursor-pointer text-center">
              <a href="#">
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
          <div className="flex justify-center flex-col mb-1 sm:flex-row">
            <div className="flex justify-evenly">
               <a  href="https://www.haileamlakwaleligne3910@gmail.com" className="my-3 cursor-pointer">
              <ImMail size={60} className="font-bold mx-4 p-2 text-black hover:text-[#04b4fa] bg-white rounded-full h-16 w-16"/>
            </a>
            <a  href="https://github.com/haileamlakwalelige" className="my-3 cursor-pointer">
              <FaGithub size={60} className="font-bold mx-4 p-2 text-black hover:text-[#04b4fa] bg-white rounded-full h-16 w-16"/>
            </a>
            <a  href="https://www.facebook.com/profile.php?id=100026113192333" className="my-3 cursor-pointer">
            <FaFacebook size={60} className="font-bold mx-4 p-2 text-black hover:text-[#04b4fa] bg-white rounded-full h-16 w-16"/>
            </a>
            </div>
            <div className="flex justify-evenly">
              <a  href="https://twitter.com/Haileopia" className="my-3 cursor-pointer">
            <FaTwitter size={60} className="font-bold mx-4 text-black hover:text-[#04b4fa] bg-white rounded-full p-2 h-16 w-16"/>
            </a>
            <a  href="https://www.instagram.com/hailaopia/" className="my-3 cursor-pointer">
            <FaInstagram size={60} className="font-bold mx-4 text-black hover:text-[#04b4fa] bg-white rounded-full p-2 h-16 w-16"/>
            </a>
            <a  href="https://www.linkedin.com/in/haileamlak-waleligne/" className="my-3 cursor-pointer">
              <FaLinkedin size={60} className="font-bold mx-4 text-black hover:text-[#04b4fa] bg-white rounded-full p-2 h-16 w-16"/>
            </a>
            </div>
            
          </div>
          <p className="text-center pt-6 font-mono text-lg">Copyright ©2023 All rights reserved | This Website is made by Haileamalak Waleligne</p>
        </div>
      </div>
    </div>
  )
}

export default Footers;