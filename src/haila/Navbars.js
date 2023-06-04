import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';


const Navbars = () => {
    const [show, setShow]=useState(false);
  return (
    <div className='pt-0 top-0  font-serif shadow-2xl bg-white'>
     <div className='flex justify-between py-4'>
        <div className='pl-10 font-bold'>
            <h1 className='font-bold text-5xl cursor-pointer hover:text-[#1de3f1] pr-4'>Kingo</h1>
        </div>
        
        <div className="pt-3 md:flex hidden overflow-auto">
            <ul className='flex pr-10'>
                <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Home</li>
                <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>About</li>
                <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Service</li>
                <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Skills</li>
                <li className='font-bold text-xl px-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Contact</li>
            </ul>
        </div> {show ? (
            <div className="pt-3 mt-32 -ml-32  md:hidden block">
            <ul className='block pr-10'>
                <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Home</li>
                <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>About</li>
                <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Service</li>
                <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Skills</li>
                <li className='font-bold text-xl py-3 hover:text-[#cbcb2c] hover:border-b-4 border-green-500 duration-300 ease-linear cursor-pointer'>Contact</li>
                <h1 className='-ml-10 bg-green-500 m-4 w-32 h-10 text-center rounded-lg pt-2 font-bold text-lg hover:bg-[#cbcb2c] text-red hover:text-green-500'>Get Start</h1>
            </ul>
        </div>):null}
        
        <div className=' mr-10 rounded-lg cursor-pointer flex justify-between'>
        <div className="md:hidden pr-4 mt-6" onClick={()=>setShow(!show)}>
        {show ? <FaTimes className="text-black font-bold text-2xl " />
        :
        <FaBars className="text-black font-bold text-2xl " />}
        </div>
            <h1 className='hidden md:block bg-green-500 m-4 w-32 h-10 text-center rounded-lg pt-2 font-bold text-lg hover:bg-[#cbcb2c] text-black hover:text-green-500'>Get Start</h1>
        </div>
        </div>
    </div>
  )
}

export default Navbars