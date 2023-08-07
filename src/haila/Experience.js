import image from '../imgs/king.gif'
import etrade from '../imgs/etrade.png';
import ehpsa from '../imgs/EHPSA.jpg';
import axis from '../imgs/axis.png';
import helder from '../imgs/helder.png';
import mella from '../imgs/mella.jpg';


const Experience=()=>{
    return(
        <div className="bg-slate-800 py-20  text-white flex font-serif flex-col justify-center items-center">
            <h1 className="font-bold text-5xl text-center py-5">My Experiences</h1>
            <div className='py-10 text-lg bg-white shadow-2xl my-4 font-serif text-slate-900 mx-5 shadow-black '>
                <h1 className="font-bold text-3xl text-center flex items-center justify-center">Software Developer, Helder Technologies Solution PLC</h1>
                <p className='text-center py-1'> Addis Ababa, july 01 - Present</p>
                <div className='flex justify-between px-10 items-center py-5 lg:flex-row flex-col'>
                    <img src={helder} alt="first images" width={200} height={200} className="lg:my-0 my-10"/>
                    <p className='flex justify-center items-center pl-20'>
                    I am incredibly fortunate to have had the opportunity to work at Helder,
                     and it has been an extraordinary and fulfilling experience. Not only has 
                     it been immensely enjoyable, but it has also been a constant source of 
                     inspiration that has allowed me to make significant advancements in 
                     my Software Development skills. Helder has provided me with an
                      exceptional platform to explore and develop myself in every aspect of the 
                      Software-Development domain. I am deeply grateful for the invaluable 
                      learning opportunities and the 
                    remarkable personal and professional growth I have attained during my time here.
                    </p>
                </div>
                </div>
            <div className='py-10 text-lg bg-white shadow-2xl my-4 font-serif text-slate-900 mx-5 shadow-black '>
                <h1 className="font-bold text-3xl text-center flex items-center justify-center">Internship, Axis Marketing Service</h1>
                <p className='text-center py-1'> Addis Ababa, july 25 - Present</p>
                <div className='flex justify-between px-10 items-center py-5 lg:flex-row flex-col'>
                    <img src={axis} alt="first images" width={200} height={200} className="lg:my-0 my-10"/>
                    <p className='flex justify-center items-center pl-20'>
                    I had the incredible opportunity to intern at Axis, and it has been an exceptionally 
                    rewarding experience. Not only has it been thoroughly enjoyable, but it has also been 
                    highly stimulating, allowing me to enhance my front-end skills significantly. 
                    The organization has provided me with an ideal platform to develop myself in every 
                    aspect of the front-end domain. 
                    I am grateful for the invaluable learning and growth opportunities I have gained
                     during my time here
                    </p>
                </div>
            </div>
            <div className='py-10 text-lg bg-white shadow-2xl my-4 font-serif text-slate-900 mx-5 shadow-black '>
                <h1 className="font-bold text-3xl text-center flex items-center justify-center">Internship, EHPSA</h1>
                <p className='text-center py-1'> Addis Ababa, june 1 - Present</p>
                <div className='flex justify-between px-10 items-center py-5 lg:flex-row flex-col'>
                    <img src={ehpsa} alt="first images" width={200} height={200} className="lg:my-0 my-10"/>
                    <p className='flex justify-center items-center pl-20'>
                    At EHPSA, I am acquiring an incredible set of skills in front-end development. 
                    Working on an amazing website with a multitude of functionalities, 
                    including payment and donation systems, has been truly exhilarating.
                     This opportunity has provided me with the perfect platform to enhance my 
                     abilities and expand my knowledge in this field. I am confident that 
                    I will continue to develop an exceptional skill set through this invaluable experience.
                    </p>
                </div>
            </div>
            <div className='py-10 text-lg bg-white shadow-2xl my-4 font-serif text-slate-900 mx-5 shadow-black '>
                <h1 className="font-bold text-3xl text-center flex items-center justify-center">Internship, in Ethiopian Trade and Market Development Office</h1>
                <p className='text-center py-1'>Debre Markos, july 2022 - oct 2022</p>
                <div className='flex justify-between px-10 items-center py-5 lg:flex-row flex-col'>
                    <img src={etrade} alt="first images" width={200} height={200} className="lg:my-0 my-10"/>
                    <p className='flex justify-center items-center pl-20'>My internship was a phenomenal experience that enabled me to acquire a diverse skill set 
                    and gain a comprehensive understanding of web development. I was able to discern the needs 
                    of users and identify key strategies to enhance website usability.
                     As I move forward, I remain committed to performing at my absolute best in all future projects.</p>
                </div>
            </div>
            <div className='py-10 text-lg bg-white shadow-2xl my-4 font-serif text-slate-900 mx-5 shadow-black '>
                <h1 className="font-bold text-3xl text-center flex items-center justify-center">Freelance </h1>
                <p className='text-center py-1'>Remote, Virtual</p>
                <div className='flex justify-between px-10 items-center py-5  lg:flex-row flex-col'>
                    <img src={image} alt="first images" width={200} height={200}  className="lg:my-0 my-10"/>
                    <p className='flex justify-center items-center pl-20'>
                    I specialize in creating exceptional user experiences and have a deep understanding of UX design. 
                    Collaborating with clients to align their vision and ensuring attention to detail on all project 
                    sizes sets me apart as a top-notch front-end developer
                    </p>
                </div>
            </div>
            <div className='py-10 text-lg bg-white shadow-2xl my-4 font-serif text-slate-900 mx-5 shadow-black '>
                <h1 className="font-bold text-3xl text-center flex items-center justify-center"> Volunteering Rotaract Mella</h1>
                <p className='text-center py-1'>
                       Addis Ababa Feb 2019 - Present
                </p>
                <div className='flex justify-between px-10 items-center py-5 lg:flex-row flex-col'>
                    <img src={mella} alt="first images" width={200} height={200} className="lg:my-0 my-10"/>
                    <p className='flex justify-center items-center pl-20'>
                    Volunteering for Rotaract Mella, Kids Football Team & Cinema House me to communicate,
                     understand needs & help others. Making a positive impact is fulfilling & gave me a 
                     passion for serving others, which will help me excel in any role.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Experience;