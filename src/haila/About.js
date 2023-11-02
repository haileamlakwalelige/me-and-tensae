
import profile from '../imgs/profile.jpg';



const About=()=>{
    return(
        <div id="about" className="bg-slate-900 grid grid-cols-1 lg:grid-cols-2 justify-evenly px-3 items-center py-20 shadow-2xl shadow-gray-400">
            <div className="flex justify-center items-center lg:justify-start">
                <img src={profile} alt="Haileamlak Waleligne" width={500} height={500}  className="rounded-3xl brightness-75 hover:brightness-100"/>
            </div>
            <div>
            <h1 className='text-center font-bold text-4xl text-white pt-24 lg:pt-20 pr-20 pl-3  '>About Me</h1>
                <p className="text-center text-gray-400 hover:text-gray-300 text-lg  pt-5">
                Hello, my name is 
                 <span className="font-bold text-xl text-green-400 text-center "> Haileamlak Waleligne</span>
                </p>
                <p className="text-gray-400 hover:text-gray-300 text-lg  pt-1 flex justify-center items-center lg:text-start lg:pt-auto">
                 and I am a software developer with a passion 
                  for website development. As a full stack developer,
                   I have honed my skills in front-end development 
                    using React JS and Next JS. I am deeply committed 
                     to my work and take pride in completing all my projects
                      to the best of my abilities. 
                      In addition to being a highly skilled developer, 
                      I am an excellent communicator who enjoys working 
                      collaboratively with others. Whether working as 
                      part of a team or individually, I am always willing 
                      to go the extra mile to ensure that the project is successful.
                       I possess a creative mindset and am a skilled problem solver,
                        always eager to find innovative solutions to complex challenges.</p>
            </div>
        </div>
    )
}

export default About;