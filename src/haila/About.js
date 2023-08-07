
import profile from '../imgs/profile.jpg';



const About=()=>{
    return(
        <div id="about" className="bg-slate-800 flex justify-evenly lg:flex-row flex-col items-center py-20">
            <div>
                <img src={profile} alt="Haileamlak Waleligne" width={500} height={500}  className="rounded-3xl brightness-75 hover:brightness-100"/>
            </div>
            <div>
            <h1 className='text-center font-bold text-3xl text-white pt-24 lg:pt-20 -pl-10 pr-20 font-serif'>About Me</h1>
                <p className="text-center text-gray-400 hover:text-gray-300 text-lg font-serif pt-5">
                Hello, my name is <span className="font-bold text-xl text-green-400 ">Haileamlak Waleligne</span>
                </p>
                <p className="text-gray-400 hover:text-gray-300 text-lg font-serif pt-1 flex justify-center items-center lg:text-start lg:pt-auto">
                 and I am a software developer with a passion <br/>
                  for website development. As a full stack developer,<br/>
                   I have honed my skills in front-end development <br/>
                    using React JS and Next JS. I am deeply committed <br/>
                     to my work and take pride in completing all my projects<br/>
                      to the best of my abilities. <br/>
                      In addition to being a highly skilled developer, <br/> 
                      I am an excellent communicator who enjoys working <br/>
                      collaboratively with others. Whether working as <br/>
                      part of a team or individually, I am always willing <br/>
                      to go the extra mile to ensure that the project is successful.<br/>
                       I possess a creative mindset and am a skilled problem solver,<br/>
                        always eager to find innovative solutions to complex challenges.</p>
            </div>
        </div>
    )
}

export default About;