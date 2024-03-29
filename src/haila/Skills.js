import frontend from '../imgs/frontend.png';
import backend from '../imgs/backend.png';
import mobile from '../imgs/mobile.png';
import {useState} from 'react';



const Skills=()=>{
    const [front, setFront] =useState(false);
    const [back, setBack]=useState(false);
    const [mobiles, setMobiles]=useState(false);
    return(
        <div id="skills" className="py-24 bg-slate-900 shadow-2xl shadow-gray-400">
            <h1 className="font-bold text-5xl text-gray-100 py-5 text-center  ">MY Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 ">
            <div className="p-10 bg-white hover:text-white hover:bg-gray-700  rounded-2xl">
                <div className="flex justify-center items-center">
                <img src={frontend} alt="template one" />
                </div>
                <h1 className="font-bold text-2xl py-4 text-center text-blue-600">Front-end Development</h1>
                <p className=" text-lg text-center">For front-end development,
                 I leverage the power of <span className="font-bold text-serif text-xl text-green-500">React.js, Next.js, and Tailwind CSS</span>. 
                 This combination not only ensures clean and concise code but also enhances 
                 the overall readability and understandability of the project. 
                 {front ? ("The seamless integration of React.js and Next.js allows for efficient development and improved performance. Additionally, Tailwind CSS facilitates the creation of stunning website designs, giving them a visually appealing and remarkable appearance. Together, these technologies empower me to deliver exceptional user experiences while maintaining code quality and visual aesthetics."):(null)}
                 <div onClick={()=>setFront(!front)} className="rounded-2xl bg-gray-500 py-1 duration-500 hover:bg-white border-2 w-32 justify-center items-center text-center flex border-gray-500 mt-5"> 
                 {front ? <button className="text-lg  text-white hover:text-gray-800 ">Read Less</button>:<button className=" hover:text-gray-800 text-lg  text-white">Read More</button>}
                 </div>
                 </p>
            </div>
            <div className="p-10 bg-white hover:text-white hover:bg-gray-700  rounded-2xl">
                <div className="flex justify-center items-center">
                <img src={backend} alt="template one" />
                </div>
                <h1 className="font-bold text-2xl py-4 text-center text-blue-600">Back-end Development</h1>
                <p className=" text-lg text-center">
                For backend development, I rely on <span className="font-bold text-serif text-xl text-green-500">Node.js and Express.js</span>  as my go-to frameworks,
                 along with <span className="font-bold text-serif text-xl text-green-500">MySQL and MongoDB </span>for database management. 
                {back ? (" This combination ensures that my code is structured, clear, and easy to comprehend. Node.js and Express.js provide a seamless and efficient development experience, allowing me to build robust and scalable backend systems. With MySQL and MongoDB, I can effectively manage and manipulate data, ensuring a reliable and efficient database structure. This robust tech stack empowers me to create powerful and performant backend solutions, while also ensuring the smooth handling of complex data operations."):null}
                <div onClick={()=>setBack(!back)} className="rounded-2xl bg-gray-500 py-1 duration-500 hover:bg-white border-2 w-32 justify-center items-center text-center flex border-gray-500 mt-5"> 
                 {back ? <button className="text-lg  text-white hover:text-gray-800 ">Read Less</button>:<button className=" hover:text-gray-800 text-lg  text-white">Read More</button>}
                 </div>
                </p>
            </div>
            <div className="p-10 bg-white hover:text-white hover:bg-gray-700  rounded-2xl">
                <div className="flex justify-center items-center">
                <img src={mobile} alt="template one" />
                </div>
                <h1 className="font-bold text-2xl py-4 text-center text-blue-600">Mobile App Development</h1>
                <p className=" text-lg text-center">
                For mobile app development, I utilize <span className="font-bold text-serif text-xl text-green-500">React Native</span>  as my framework of choice, 
                along with <span className="font-bold text-serif text-xl text-green-500">Styled Components</span>  for styling. 
                  {mobiles ? ("This powerful combination allows me to create highly functional and visually appealing mobile applications. With React Native, I can write code once and deploy it across multiple platforms, saving valuable development time while ensuring a consistent user experience. Styled Components provide a convenient and efficient way to style components, resulting in clean and maintainable code. Together, React Native and Styled Components enable me to deliver exceptional mobile apps that are not only feature-rich but also visually captivating."):null}
                  <div onClick={()=>setMobiles(!mobiles)} className="rounded-2xl bg-gray-500 py-1 duration-500 hover:bg-white border-2 w-32 justify-center items-center text-center flex border-gray-500 mt-5"> 
                 {mobiles ? <button className="text-lg  text-white hover:text-gray-800 ">Read Less</button>:<button className=" hover:text-gray-800 text-lg  text-white">Read More</button>}
                 </div>
                </p>
            </div>
            
 
    
        </div>
        </div>
    )
}

export default Skills;