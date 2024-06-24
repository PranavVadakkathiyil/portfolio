import React from "react";
import banner from "../Img/banner.png";
import mainimg from "../Img/main.svg";
import img from "../Img/pranav2.1.png";
import {
    FaGithub,FaLink 
  } from "react-icons/fa";
const Projects = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-3 grid-cols-1 m-4 gap-3 ">
        <div className="col-span-1 border-4   rounded-tl-[4rem] h-[40vh] flex flex-col  justify-center p-4">
          <div className="border-4 h-[60%]  rounded-tl-[4rem] m-3 flex justify-center">
            <img src={banner} alt="img" className="h-full " />
          </div>
          <div className="flex justify-end pr-5 gap-5">
            <p><FaGithub className="text-[1.4rem]"/></p>
            <p><FaLink className="text-[1.4rem]"/></p>
          </div>
        </div>
        <div className="col-span-1 border-4   rounded-tl-[4rem] h-[40vh] flex flex-col  justify-center p-4">
          <div className="border-4 h-[60%]  rounded-tl-[4rem] m-3 flex justify-center">
            <img src={banner} alt="img" className="h-full " />
          </div>
          <div className="flex justify-end pr-5 gap-5">
            <p><FaGithub className="text-[1.4rem]"/></p>
            <p><FaLink className="text-[1.4rem]"/></p>
          </div>
        </div>
        <div className="col-span-1 border-4   rounded-tl-[4rem] h-[40vh] flex flex-col  justify-center p-4">
          <div className="border-4 h-[60%]  rounded-tl-[4rem] m-3 flex justify-center">
            <img src={banner} alt="img" className="h-full " />
          </div>
          <div className="flex justify-end pr-5 gap-5">
            <p><FaGithub className="text-[1.4rem]"/></p>
            <p><FaLink className="text-[1.4rem]"/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
