/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import white from '../imgs/black.png';
import blog from '../imgs/blog.jpg';
import note from '../imgs/note.jpg';
import books from '../imgs/books.jpg';
import budget from '../imgs/budget.jpg';
import food from '../imgs/food.jpg';
import insta from '../imgs/insta.jpg';
import personal from '../imgs/personal.jpg';
import quote from '../imgs/quotes.jpg';
import task from '../imgs/task.jpg';
import travel from '../imgs/travel.jpg';
import weather from '../imgs/weather.jpg';
import 'aos/dist/aos.css';



const Projects = () => {
  return (
    <div id="projects" className="font-serif bg-slate-900 overflow-x-hidden">
    <h1 className="font-bold text-5xl pt-24 sm:pt-60 md:pt-32 pb-10 text-center text-white shadow-2xl scroll-pb-10">My Projects</h1>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 pt-4 justify-center md:justify-between px-4 pb-10">
            
            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black p-3" data-aos="slide-left">
            <a href="https://yenettacodeclone.netlify.app/">
            <img src={white} alt="Yenetta code clone" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6">
            <a href="https://github.com/haileamlakwalelige/Yebetta-Code-Site-Clone-in-Next-js" className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Yenetta Code clone</a></h1>
            <p className='text-black text-center'>Single page with Next js and Tailwindcss</p>
            </div>

            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black p-3" data-aos="slide-up">
            <a href="https://hw-instagram-clone.netlify.app/"> <img src={insta} alt="Instagram clone" className="w-full h-40"/></a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/Instagram-Clone-in-React-js" className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Instagram clone</a></h1>
            <p className='text-black text-center'>Single and best responsive page</p>
            </div>

            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black p-3" data-aos="slide-right">
            <img src={task} alt="Task Management" className="w-full h-40"/>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/Task-Management-System-in-React-js-Node-js-Express-js-and-MYSQL"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Task Management App</a></h1>
            <p className='text-black text-center'>Full Stack App</p>
            </div>

            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black" data-aos="flip-right">           
            <a href="https://weather-tellers.netlify.app/">
            <img src={weather} alt="Weather app" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/Weather-App-with-API-in-React-js"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Weather App</a></h1>
            <p className='text-black text-center'>Use Api to fetch Data</p>
            </div>

            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black" data-aos="flip-up">          
            <a href="https://note-takings.netlify.app/">
            <img src={note} alt="Note app" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/React-Js-Note-App"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Notebook App</a></h1>
            <p className='text-black text-center'>Note taking</p>
            </div>

            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600   h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black p-3" data-aos="flip-left">
            <a href="https://personal-bloging.netlify.app/">
            <img src={blog} alt="Personal Blog" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/Personal-Blog-in-React-js"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Personal Blog</a></h1>
            <p className='text-black text-center'>blog app</p>
            </div>

            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black p-3" data-aos="fade-right">
            <a href="https://hw-random-quote.netlify.app/">
            <img src={quote} alt="Random Quotes" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/Random-Quote-Generator-in-React-js"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Random Quotes</a></h1>
            <p className='text-black text-center'>Random Quotes generator using API</p>
            </div>

            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600 bg-white shadow-2xl shadow-black h-80 pt-10 rounded-lg p-3" data-aos="fade-down">
            <a href="https://select-books.netlify.app/">
            <img src={books} alt="Books" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/Book-App-in-React-js"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Books App</a></h1>
            <p className='text-black text-center'>Lists of Books with API</p>
            </div>

            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600 bg-white shadow-2xl shadow-black h-80 pt-10 rounded-lg p-3"  data-aos="fade-left">
            <a href="https://budget-trakings.netlify.app/">
            <img src={budget} alt="Budget app" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/Budget-Tracker-App-React-js"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Budget Tracker App</a></h1>
            <p className='text-black text-center'>Track your budgets</p>
            </div>

            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black" data-aos="zoom-in">
            <a href="https://hw-food-recipe-app.netlify.app/">
            <img src={food} alt="Food Recipe" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/Recipe-App-With-API-And-With-Responsive-in-React-js"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Food Recipe App</a></h1>
            <p className='text-black text-center'>Using Api to fetch Data</p>
            </div>
            
            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black p-3" data-aos="zoom-out">
            <a href="https://haileamlakwaleligne.netlify.app/project">
            <img src={personal} alt="personal  website" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/PortfolioInReact"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">Personal Website</a></h1>
            <p className='text-black text-center'>Single page with Tailwindcss</p>
            </div>
            
            <div className="hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black p-3" data-aos="zoom-in">
            <a href="https://redux-cruds.netlify.app/">
            <img src={travel} alt="Travelers App" className="w-full h-40"/>
            </a>
            <h1 className="text-black font-bold text-xl text-center pt-6"><a href="https://github.com/haileamlakwalelige/CRUD-in-React-js-and-Redux"  className="hover:border-green-500 hover:border-b-4 duration-500 ease-in-out">CRUD App Redux</a></h1>
            <p className='text-black text-center'>Single page with Next and Tailwindcss and Redux</p>
            </div>
        </div>
    </div>
  )
}

export default Projects