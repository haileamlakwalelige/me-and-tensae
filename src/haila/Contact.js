import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact=()=>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div id="contact" className="bg-[#080622] flex flex-col justify-center items-center h-screen text-white">
            <h1 className="font-bold text-5xl text-center py-5 font-serif">Lets Start to Talk</h1>
            <form ref={form} onSubmit={sendEmail} className="border-2 border-gray-300 sm:p-10 p-4 rounded-2xl  md:p-30">
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