


const Contact=()=>{
    return(
        <div className="bg-[#080622] flex justify-center items-center h-screen text-white">
            <form className="border-2 border-gray-300 sm:p-10 p-4 rounded-2xl  md:p-30">
                <div className="flex flex-col lg:flex-row justify-center items-center py-5">
                <label className="font-bold px-2">Name:</label>
                <input type="text" className="border-2 border-gray-500 mx-2 my-2 text-white"/>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center py-5">
                <label className="font-bold px-2">Email:</label>
                <input type="email" className="border-2 border-gray-500 mx-2 my-2 text-white"/>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center py-5">
                <label className="px-2 -top-3 font-bold">Message:</label>
                <textarea rows={4} cols={25} />
                </div>
            </form>
        </div>
    )
}

export default Contact;