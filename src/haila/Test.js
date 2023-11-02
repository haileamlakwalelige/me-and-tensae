import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import white from '../imgs/black.png';
import blog from '../imgs/blog.jpg';
import note from '../imgs/note.jpg';
import books from '../imgs/books.jpg';
import budget from '../imgs/budget.jpg';
import food from '../imgs/food.jpg';
import insta from '../imgs/insta.jpg';
import book from '../imgs/book.png'
import quote from '../imgs/quotes.jpg';
import task from '../imgs/task.jpg';
import travel from '../imgs/travel.jpg';
import weather from '../imgs/weather.jpg';
import projects from './data.js';
import 'aos/dist/aos.css';


const Test = () => {
    
  return (
    <div className="grid w-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center bg-slate-900 px-4 py-12 ">
      <TiltCard />
    </div>
  );
};

const TiltCard = () => {
    const images=[book, white, insta, weather, note, blog, quote, books, budget, food, task, travel];
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index)=>(
            <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-96 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 my-5"
      key={index}
    >
    
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
              <div
          className='hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black p-3 py-5'
          // data-aos={project.motion}
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
          <p className='text-black text-center'>
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
        ))}
    </div>
  );
};

export default Test;