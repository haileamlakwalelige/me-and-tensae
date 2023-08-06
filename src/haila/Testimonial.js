import bg from '../imgs/personal.jpg';


const Testimonial=()=>{
    return(
        <div className="bg-[#0e0e2b] flex flex-col text-white -center  justify-center items-center">
            <h1 className="font-bold text-center justify-center pt-10 text-3xl text items-center flex font-serif">Here it from My Boss and My Friends</h1>
            <div className="bg-[#0e0e2b]  px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 pb-32 text-gray-300 gap-10 justify-center items-center">
            <div  className='h-96 hover:transform hover:translate-x-2 duration-500 hover:-translate-y-2 font-bold flex flex-col justify-center bg-white hover:bg-gray-400 px-10 py-16 text-gray-950 rounded items-center'>
                <img src={bg} alt="Testimonial one" width={100} height={100} className="flex justify-center items-center rounded-full" />
                <h1 className='font-bold text-xl font-serif py-3'>Ashenafi Belete</h1>
                <p className="font-light ">Haileamlak is amazing person he have a passion to learn new thing. 
                 He always perform the best of him even if the project is much more harder.</p>
            </div>
            <div  className='h-96 hover:transform hover:translate-x-2 duration-500 hover:-translate-y-2 font-bold flex flex-col justify-center bg-white hover:bg-gray-400 px-10 py-16 text-gray-950 rounded items-center'>
            <img src={bg} alt="Testimonial one" width={100} height={100} className="flex justify-center items-center rounded-full" />

                <h1 className='font-bold text-xl font-serif py-3'>Abinet Erbaye</h1>
                <p className="font-light ">
                    Haileamlak is strong person. he try everything he want to do. he like to fight challenges and improves himself in everyday and in every events.
                </p>
            </div>
            <div  className='h-96 hover:transform hover:translate-x-2 duration-500 hover:-translate-y-2 font-bold flex flex-col justify-center bg-white hover:bg-gray-400 px-10 py-16 text-gray-950 rounded items-center'>
            <img src={bg} alt="Testimonial one" width={100} height={100} className="flex justify-center items-center rounded-full" />
                <h1 className='font-bold text-xl font-serif py-3'>Getu Girma</h1>
                <p className="font-light ">
                    We share the same class and the same group and i know him for almost 3 years, within this 3 year i understand
                     that Haileamlak is fighter for everything he face. and he always love to make Projects and want to learn new things.
                </p>
            </div>
            <div  className='h-96 hover:transform hover:translate-x-2 duration-500 hover:-translate-y-2 font-bold flex flex-col justify-center bg-white hover:bg-gray-400 px-10 py-16 text-gray-950 rounded items-center'>
            <img src={bg} alt="Testimonial one" width={100} height={100} className="flex justify-center items-center rounded-full" />
                <h1 className='font-bold text-xl font-serif py-3'>Getnet Bante</h1>
                <p className="font-light ">
                    With Haileamlak we spent only one year in the same dorm. and i always get him in the library when he write codes. the awesome thing is that he never say i'm tired of coding,
                     he always try new project with new programming language and he love to write codes.
                </p>
            </div>
        </div>
        </div>
    )
}

export default Testimonial;