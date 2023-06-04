import React,{useEffect} from 'react'
import gif from '../imgs/king.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Heros = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[]);

  return (
    // eslint-disable-next-line react/style-prop-object
    <div className='bg-slate-900 font-serif shadow-2xl pb-4'>
     <div className='pt-10 grid lg:grid-cols-2 lg:gap-16 '>
       <div className="md:ml-32 mt-32 flex flex-col items-center" data-aos="fade-down">
        <h1 className="font-bold text-5xl ml-3 my-6 text-center hover:text-white cursor-pointer">I'M Haileamalak Waleligne</h1>
        <h2 className="font-bold text-4xl text-green-500 ml-10 mb-6">Web Developer</h2>
        <p className='text-xl text-[#1ccde4] text-center'>Embrace your creativity as it is a valued skill in any field, <br/> 
        allowing you to bring a unique perspective and <br /> innovative solutions to 
        the task at hand.</p>
       </div>
       <div>
        <div className=' rounded-full mt-10 grid justify-center opacity-50 ' data-aos="fade-up">
            <img alt="Haileamlak Waleligne" src={gif} className='justify-center flex md:h-[600px] md:w-[500px] w-[300px] h-[400px] sm:w-[400px] sm:h-[500px]   sm:ml-32 md:ml-0 rounded-lg'/>
       </div>
       </div>
       
     </div>
        
    </div>
  )
}

export default Heros