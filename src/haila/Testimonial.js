import bg from '../imgs/personal.jpg';


const Testimonial=()=>{
    return(
        <div className="bg-[#0e0e2b] flex flex-col text-white -center  justify-center items-center">
            <h1 className="font-bold text-center justify-center pt-10 text-3xl text items-center flex font-serif">Here it from My Boss and My Friends</h1>
            <div className="bg-[#0e0e2b]  px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 pb-32 text-gray-300 gap-10 justify-center items-center">
            <div  className='hover:transform hover:translate-x-2 duration-500 hover:-translate-y-2 font-bold flex flex-col justify-center bg-white hover:bg-gray-400 px-10 py-16 text-gray-950 rounded items-center'>
                <img src={bg} alt="Testimonial one" width={100} height={100} className="flex justify-center items-center rounded-full" />
                <h1 className='font-bold text-xl font-serif py-3'>Testimonial One</h1>
                <p className="font-light ">Whether working independently
                      or as part of a team, I am committed to delivering outstanding results
                       that meet and exceed my clients' expectations.</p>
            </div>
            <div  className='hover:transform hover:translate-x-2 duration-500 hover:-translate-y-2 font-bold flex flex-col justify-center bg-white hover:bg-gray-400 px-10 py-16 text-gray-950 rounded items-center'>
            <img src={bg} alt="Testimonial one" width={100} height={100} className="flex justify-center items-center rounded-full" />

                <h1 className='font-bold text-xl font-serif py-3'>Testimonial Two</h1>
                <p className="font-light ">Whether working independently
                      or as part of a team, I am committed to delivering outstanding results
                       that meet and exceed my clients' expectations.</p>
            </div>
            <div  className='hover:transform hover:translate-x-2 duration-500 hover:-translate-y-2 font-bold flex flex-col justify-center bg-white hover:bg-gray-400 px-10 py-16 text-gray-950 rounded items-center'>
            <img src={bg} alt="Testimonial one" width={100} height={100} className="flex justify-center items-center rounded-full" />
                <h1 className='font-bold text-xl font-serif py-3'>Testimonial Three</h1>
                <p className="font-light ">Whether working independently
                      or as part of a team, I am committed to delivering outstanding results
                       that meet and exceed my clients' expectations.</p>
            </div>
            <div  className='hover:transform hover:translate-x-2 duration-500 hover:-translate-y-2 font-bold flex flex-col justify-center bg-white hover:bg-gray-400 px-10 py-16 text-gray-950 rounded items-center'>
            <img src={bg} alt="Testimonial one" width={100} height={100} className="flex justify-center items-center rounded-full" />
                <h1 className='font-bold text-xl font-serif py-3'>Testimonial Three</h1>
                <p className="font-light ">Whether working independently
                      or as part of a team, I am committed to delivering outstanding results
                       that meet and exceed my clients' expectations.</p>
            </div>
        </div>
        </div>
    )
}

export default Testimonial;