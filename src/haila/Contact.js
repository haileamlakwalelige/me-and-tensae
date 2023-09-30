


const Contact=()=>{


    return(
        <div id="contact" className="bg-slate-900 shadow-2xl shadow-gray-400 flex flex-col justify-center items-center h-screen text-white">
            <h1 className="font-bold text-5xl text-center py-5 font-serif">Lets Talk</h1>
            <form  className="border-2 border-gray-300 sm:p-10 p-4 rounded-2xl  md:p-30">
                <div className="flex flex-col lg:flex-row justify-center items-center py-5">
                <label className="font-bold px-2">Name:</label>
                <input type="text" name="user_name" className="border-2 border-gray-500 mx-2 my-2 text-white"/>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center py-5">
                <label className="font-bold px-2">Email:</label>
                <input type="email" name="user_email" className="border-2 border-gray-500 mx-2 my-2 text-white"/>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center py-5">
                <label className="px-2 -top-3 font-bold">Message:</label>
                <textarea rows={4} cols={25} />
                </div>
                <div className="flex bg-green-600 hover:bg-blue-500 cursor-pointer justify-center items-center px-2 py-4">
                    <button type="submit" value="Submit" className=" text-white text-xl font-serif ">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;