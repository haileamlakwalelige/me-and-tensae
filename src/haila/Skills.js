import image from '../imgs/logo.png';



const Skills=()=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <img src={image} alt="template one" />
                <h1>Front-end Development</h1>
                <p className="font-serif text-lg text-center">For front-end development,
                 I leverage the power of<span className="font-bold text-serif text-xl text-green-500">React.js, Next.js, and Tailwind CSS</span>. 
                 This combination not only ensures clean and concise code but also enhances 
                 the overall readability and understandability of the project. The seamless 
                 integration of React.js and Next.js allows for efficient development and 
                 improved performance. Additionally, Tailwind CSS facilitates the creation of 
                 stunning website designs, giving them a visually appealing and remarkable 
                 appearance. Together, these technologies empower me to deliver exceptional 
                user experiences while maintaining code quality and visual aesthetics.</p>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Skills;