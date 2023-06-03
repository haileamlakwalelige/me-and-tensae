import Footers from "./haila/Footers";
import Heros from "./haila/Heros";
import Navbars from "./haila/Navbars";
import Projects from "./haila/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

export default function App() {

  useEffect(()=>{
    AOS.init({duration:1000})
  },[]);
  return (
    <div className="bg-[#01013ae8]">
      <Navbars />
      <Heros />
      <Projects />
      <Footers />
    </div>
  )
}