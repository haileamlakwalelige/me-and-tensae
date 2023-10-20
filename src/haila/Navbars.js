/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {SiReactos} from 'react-icons/si';


const Navbars = () => {
    const [show, setShow]=useState(false);
  return (
    <div className='pt-0 top-0  font-serif shadow-2xl bg-white'>
     <div className='flex justify-between py-4'>
        <div className='pl-10 font-bold'>
            <SiReactos size={50} className='text-slate-900 mt-2'/>
        </div>
        
        <div className="pt-3 lg:flex hidden ">
            <ul className='flex pr-10'>
                <a href="#">
                  <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Home</li>
                </a>
                <a href="#about">
                <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>About</li>
                </a>
                <a href="#projects">
                  <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Projects</li>
                </a>
                <a href="#service">
                  <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Service</li>
                </a>
                <a href="#skills">
                <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Skills</li>
                </a>
                <a href="#contact">
                <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Contact</li>
                </a>
            </ul>
        </div> {show ? (
            <div className="pt-3 mt-32 -ml-32 h-screen  lg:hidden block">
            <ul className='block pr-10'>
                <a href="#">
                  <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Home</li>
                </a>
                <a href="#about">
                  <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>About</li>
                </a>
                <a href="#projects">
                <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Projects</li>
                </a>
                <a href="#service">
                <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Service</li>
                </a>
                <a href="#skills">
                <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Skills</li>
                </a>
                <a href="#contact">
                   <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Contact</li>
                </a>
                <a href="#contact">
                  <h1 className='-ml-10 bg-green-500 m-4 w-32 h-10 text-center rounded-lg pt-2 font-bold text-lg hover:bg-[#cbcb2c] text-red hover:text-green-500'>Lets Talk</h1>
                </a>
            </ul>
        </div>):null}
        
        <div className=' mr-10 rounded-lg cursor-pointer flex justify-between'>
        <div className="lg:hidden pr-4 mt-6" onClick={()=>setShow(!show)}>
        {show ? <FaTimes className="text-black font-bold text-2xl " />
        :
        <FaBars className="text-black font-bold text-2xl " />}
        </div>
          <a href="#contact">
            <h1 className='hidden lg:block bg-green-500 m-4 w-32 h-10 text-center rounded-lg pt-2 font-bold text-lg hover:bg-[#cbcb2c] text-black hover:text-green-500'>Lets Talk</h1>
          </a>
        </div>
        </div>
    </div>
  )
}

export default Navbars