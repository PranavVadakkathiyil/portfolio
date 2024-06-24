import React from "react";
import {
    FaLink 
  } from "react-icons/fa";
const Projects = () => {
  return (
    <div className=" flex items-center  sm:m-3">
      <div className="grid sm:grid-cols-4 grid-cols-1 m-2 gap-3  ">
        <p className="font-[2rem] text-[1.6rem] sm:text-[2.2rem]  text-center p-1 sm:flex items-center justify-center bg-gradient-to-r from-zinc-800 to-zinc-900 text-white sm:rounded-[2rem]">Projects</p>
      <div className="col-span-1  bg-neutral-900  rounded-[2rem] h-[60vh]  max-w-sm flex flex-col  justify-center p-5">
          <div className=" h-[70%] bg-black rounded-[2rem] sm:m-1 flex justify-center">
            <p className="text-white text-[2rem] text-center sm:p-0 p-1 text-wrap flex items-center">Lorem ipsum dolor sit.</p>
          </div>
          <div className="flex items-center justify-between  m-3 ">
            
              <div>
                <p className="text-gray-500  font-light text-[1.5rem]">lorem</p>
                <p className="text-[23px] text-[#5B78F6] leading-[1.7rem]">Project Lorem, ipsum.</p>
              </div>
              <div className="flex flex-col gap-2  ">
              <p><FaLink className="text-[1.4rem] text-white cursor-pointer"/></p>
              </div>
            
          </div>
        </div>
        <div className="col-span-1  bg-neutral-900  rounded-[2rem] h-[60vh]  max-w-sm flex flex-col  justify-center p-5">
          <div className=" h-[70%] bg-black rounded-[2rem] sm:m-1 flex justify-center">
            <p className="text-white text-[2rem] text-center sm:p-0 p-1 text-wrap flex items-center">Lorem ipsum dolor sit.</p>
          </div>
          <div className="flex items-center justify-between  m-3 ">
            
              <div>
                <p className="text-gray-500  font-light text-[1.5rem]">lorem</p>
                <p className="text-[23px] text-[#5B78F6] leading-[1.7rem]">Project Lorem, ipsum.</p>
              </div>
              <div className="flex flex-col gap-2  ">
              <p><FaLink className="text-[1.4rem] text-white cursor-pointer"/></p>
              </div>
            
          </div>
        </div>
        <div className="col-span-1  bg-neutral-900  rounded-[2rem] h-[60vh]  max-w-sm flex flex-col  justify-center p-5">
          <div className=" h-[70%] bg-black rounded-[2rem] sm:m-1 flex justify-center">
            <p className="text-white text-[2rem] text-center sm:p-0 p-1 text-wrap flex items-center">Lorem ipsum dolor sit.</p>
          </div>
          <div className="flex items-center justify-between  m-3 ">
            
              <div>
                <p className="text-gray-500  font-light text-[1.5rem]">lorem</p>
                <p className="text-[23px] text-[#5B78F6] leading-[1.7rem]">Project Lorem, ipsum.</p>
              </div>
              <div className="flex flex-col gap-2  ">
              <p><FaLink className="text-[1.4rem] text-white cursor-pointer"/></p>
              </div>
            
          </div>
        </div>
        <div className="col-span-1  bg-neutral-900  rounded-[2rem] h-[60vh]  max-w-sm flex flex-col  justify-center p-5">
          <div className=" h-[70%] bg-black rounded-[2rem] sm:m-1 flex justify-center">
            <p className="text-white text-[2rem] text-center sm:p-0 p-1 text-wrap flex items-center">Lorem ipsum dolor sit.</p>
          </div>
          <div className="flex items-center justify-between  m-3 ">
            
              <div>
                <p className="text-gray-500  font-light text-[1.5rem]">lorem</p>
                <p className="text-[23px] text-[#5B78F6] leading-[1.7rem]">Project Lorem, ipsum.</p>
              </div>
              <div className="flex flex-col gap-2  ">
              <p><FaLink className="text-[1.4rem] text-white cursor-pointer"/></p>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
