import {useState} from 'react';



const Service=()=>{
    const [front, setFront]=useState(false);
    const [back, setBack]=useState(false);
    const [full, setFull]=useState(false);
    const [mobiles, setMobiles]=useState(false);

    return(
        <div id="service" className="bg-slate-900 font-serif justify-center items-center px-10 py-32">
        <h1 className="font-bold text-5xl hover:text-blue-600 hover:text-7xl mb-10 duration-500 font-serif text-center text-gray-400">My Service</h1>
            <div className="font-serif grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center">
            <div className="pt-6 border-2 border-gray-400 p-3 rounded-2xl">
                <h1 className="hover:text-2xl duration-500 hover:text-blue-600 text-gray-300 font-bold text-xl font-serif text-center">Front-end Development</h1>
                <p className="text-gray-400 duration-1000 hover:text-gray-300 hover:text-xl  text-lg font-serif pt-10  text-start lg:pt-auto">
                I specialize in creating exceptional
                 front-end websites using a variety of tools and languages,
                  including React JS, Next JS, WordPress, and more.
                  {front ? ("With a focus on quality coding practices, I take pride in developing responsive websites that are optimized for optimal user experience across all devices. Whether working independently or as part of a team, I am committed to delivering outstanding results that meet and exceed my clients' expectations."):null}
                  <div onClick={()=>setFront(!front)} className="rounded-2xl bg-gray-500 py-1 duration-500 hover:bg-white border-2 w-32 justify-center items-center text-center flex border-gray-500 mt-5"> 
                 {front ? <button className="text-lg font-serif text-white hover:text-gray-800 ">Read Less</button>:<button className=" hover:text-gray-800 text-lg font-serif text-white">Read More</button>}
                 </div>
                   </p>
            </div>
            <div className="pt-6 border-2 border-gray-400 p-3 rounded-2xl">
                <h1  className="hover:text-2xl duration-500 hover:text-blue-600 text-gray-300 font-bold text-xl font-serif text-center">Back-end Development</h1>
                <p className="text-gray-400 duration-1000 hover:text-gray-300 hover:text-xl  text-lg font-serif pt-10 text-start lg:pt-auto">
                I possess extensive experience in developing 
                robust backend applications that are both reliable
                 and efficient.
                 {back ? ("I specialize in working with Node JS and Express JS frameworks, as well as databases such as MySQL and MongoDB. Additionally, my proficiency in PHP has enabled me to create highly-functional and scalable backend systems for a wide range of projects.Whether building a new application from scratch or optimizing an existing system, I am dedicated to delivering the best possible results."):null}
                 <div onClick={()=>setBack(!back)} className="rounded-2xl bg-gray-500 py-1 duration-500 hover:bg-white border-2 w-32 justify-center items-center text-center flex border-gray-500 mt-5"> 
                 {back ? <button className="text-lg font-serif text-white hover:text-gray-800 ">Read Less</button>:<button className=" hover:text-gray-800 text-lg font-serif text-white">Read More</button>}
                 </div>
                </p>
            </div>
            <div className="pt-6 border-2 border-gray-400 p-3 rounded-2xl">
                <h1  className="hover:text-2xl duration-500 hover:text-blue-600 text-gray-300 font-bold text-xl font-serif text-center">Full-Stack Development</h1>
                <p className="text-gray-400 duration-1000 hover:text-gray-300 hover:text-xl  text-lg font-serif pt-10  text-start lg:pt-auto">
                As a full stack developer, 
                I possess a unique set of skills that enables
                 me to create essential websites that are both
                  visually impressive and functionally robust. 
                  {full ? ("My expertise in front-end and back-end development allows me to seamlessly integrate the two, resulting in an exceptional user experience.In particular, I am well-versed in working with the MERN stack, which includes MongoDB, Express JS, React JS, and Node JS. This expertise gives me the ability to create full stack  websites that are highly responsive and optimized for optimal performance across all devices."):null} 
                  <div onClick={()=>setFull(!full)} className="rounded-2xl bg-gray-500 py-1 duration-500 hover:bg-white border-2 w-32 justify-center items-center text-center flex border-gray-500 mt-5"> 
                 {full ? <button className="text-lg font-serif text-white hover:text-gray-800 ">Read Less</button>:<button className=" hover:text-gray-800 text-lg font-serif text-white">Read More</button>}
                 </div>
                </p>
            </div>
            <div className="pt-6 border-2 border-gray-400 p-3 rounded-2xl">
                <h1  className="hover:text-2xl duration-500 hover:text-blue-600 text-gray-300 font-bold text-xl font-serif text-center">Mobile App Development</h1>
                <p className="text-gray-400 duration-1000 hover:text-gray-300 hover:text-xl  text-lg font-serif pt-10  text-start lg:pt-auto">
                As a skilled developer,
                 I specialize in creating exceptional mobile apps
                  using React Native. 
                  {mobiles ? ("With a focus on performance and responsiveness, I am committed to delivering mobile applications that are fast, reliable, and visually appealing. Using React Native, I possess the ability to develop mobile apps that are optimized for both iOS and Android platforms, resulting in a seamless user experience across all devices. My expertise in this area enables me to create unique an innovative solutions that meet the unique needs of each individual project."):null} 
                  <div onClick={()=>setMobiles(!mobiles)} className="rounded-2xl bg-gray-500 py-1 duration-500 hover:bg-white border-2 w-32 justify-center items-center text-center flex border-gray-500 mt-5"> 
                 {mobiles ? <button className="text-lg font-serif text-white hover:text-gray-800 ">Read Less</button>:<button className=" hover:text-gray-800 text-lg font-serif text-white">Read More</button>}
                 </div>
                </p>
            </div>
        </div>
        </div>
    )
}

export default Service;