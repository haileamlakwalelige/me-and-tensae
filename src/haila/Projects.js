/* eslint-disable jsx-a11y/anchor-has-content */
// import React from 'react';
// import white from '../imgs/black.png';
// import blog from '../imgs/blog.jpg';
// import note from '../imgs/note.jpg';
// import books from '../imgs/books.jpg';
// import budget from '../imgs/budget.jpg';
// import food from '../imgs/food.jpg';
// import insta from '../imgs/insta.jpg';
// import book from '../imgs/book.png'
// import quote from '../imgs/quotes.jpg';
// import task from '../imgs/task.jpg';
// import travel from '../imgs/travel.jpg';
// import weather from '../imgs/weather.jpg';
// import projects from './data.js';
import 'aos/dist/aos.css';
import Test from './Test.js'

const Projects = () => {
  // const images=[book, white, insta, weather, note, blog, quote, books, budget, food, task, travel];
  return (
    <div
      id='projects'
      className=' shadow-2xl shadow-gray-400  bg-slate-900 overflow-x-hidden'
    >
      <h1 className='font-bold text-5xl pt-24 sm:pt-60 md:pt-32 pb-10 text-center text-white shadow-2xl scroll-pb-10'>
        My Projects
      </h1>
      <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-10 pt-4 justify-center md:justify-between px-4 pb-10'>
        <Test />
        {/* {projects.map((project, index)=>(
            <div
          className='hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black'
          data-aos={project.motion}
          key={index}
        >
          <a href={project.link}>
            <img src={images[index]} alt={project.name} className='w-full h-40' />
          </a>
          <h1 className='text-black font-bold text-xl text-center pt-6'>
            <a
              href={project.git}
              className='hover:border-green-500 hover:border-b-4 duration-500 ease-in-out'
            >
              {project.name}
            </a>
          </h1>
          <p className='text-black text-center'>Using Api to fetch Data</p>
        </div>
        ))} */}
      </div>
    </div>
  );
};

export default Projects;
