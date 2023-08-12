import About from "./haila/About";
import Footers from "./haila/Footers";
import Heros from "./haila/Heros";
import Navbars from "./haila/Navbars";
import Projects from "./haila/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import Service from "./haila/Service";
import Testimonial from "./haila/Testimonial";
import Experience from "./haila/Experience";
import Skills from "./haila/Skills";
import Contact from "./haila/Contact";


export default function App() {

  useEffect(()=>{
    AOS.init({duration:1000})
  },[]);
  return (
    <div className="bg-[#01013ae8]">
      <Navbars />
      <Heros />
      <About />
      <Projects />
      <Service />
      <Experience />
      <Skills />
      <Testimonial />
      <Contact />
      <Footers />
    </div>
  )
}
