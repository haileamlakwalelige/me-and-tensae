import React from 'react';

const ContactUs = () => {
  return (
    <div
      id='contact'
      className=' bg-slate-900 py-10 text-white flex items-center flex-col justify-center'
    >
      <h1 className='font-bold text-5xl py-6'>Lets Talk</h1>
      <form
        action={`https://formsubmit.co/${process.env.REACT_APP_EMAIL}`}
        method='POST'
        className='border-2 border-white px-10 py-10 rounded-2xl flex flex-col justify-center items-center'
      >
        <div className='py-6 pr-6  text-xl'>
          <input
            type='text'
            placeholder='Full Name'
            name='name'
            className='text-black rounded px-2 py-1 placeholder:text-lg focus:outline-none'
          />
        </div>
        <div className='py-6 pr-6 text-xl'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='text-black rounded px-2 py-1 placeholder:text-lg focus:outline-none'
          />
        </div>
        <div className='py-6 pr-6  text-xl'>
          <input
            type='text'
            placeholder='Subject'
            name='subject'
            className='text-black rounded px-2 py-1 placeholder:text-lg focus:outline-none'
          />
        </div>
        <div className='py-6 pr-6 text-xl'>
          <textarea
            cols={30}
            rows={5}
            name='message'
            placeholder='Message'
            className='text-black rounded px-2 py-1 placeholder:text-lg focus:outline-none'
          ></textarea>{' '}
        </div>
        <div className='flex justify-center items-center'>
          <button className='bg-green-500 px-5 py-2 '>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
