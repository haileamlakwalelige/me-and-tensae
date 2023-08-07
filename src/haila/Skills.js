import image from '../imgs/logo.png';



const Skills=()=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <img src={image} alt="template one" />
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Skills;