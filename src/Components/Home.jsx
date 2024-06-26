import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiMongodb,SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <div className=" bg-black text-white grid sm:grid-cols-12 col-span-1 sm:p-10 sm:gap-4  p-2 gap-4 ">
        <div className="sm:col-span-5 col-span-1 h-[40vh]   rounded-3xl text-center sm:flex justify-around items-center bg-neutral-900 ">
          {/*<div className="  sm:h-[40vh] border-2 border-black  sm:border-none flex items-center ">
            <img src={img} alt="img" className="sm:h-[20vh]  border sm:block hidden " />
          </div>*/}
          <div className="sm:text-[2.7rem] mr-2">
            <p className="sm:text-[3rem] text-[2.4rem] gap-3 flex justify-center sm:py-0 py-1 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              Hi there,  I'm Pranav V <br />a self-taught  developer
            </p>
          </div>
        </div>
        <div className="sm:col-span-7 col-span-1 sm:h-[40vh]  grid sm:grid-cols-3 sm:gap-4 gap-4">
          <div className="col-span-1 h-[40vh]  rounded-3xl bg-neutral-900">
            <div className="h-[30vh] w-full  p-3 ">
              <div className=" h-full rounded-3xl flex justify-center items-center bg-black">
                <p className="sm:text-[2.4rem] text-[2rem] bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent">About Me</p>
              </div>
            </div>
            <div className="flex items-center justify-between p- m-2 pl-2">
              <p className="sm:text-[1.5rem] text-[1.2rem]">Take a look</p>
              <p>
                <BiLogInCircle className="sm:text-[2.8rem] text-[2.3rem] " />
              </p>
            </div>
          </div>
          <div className="col-span-1 sm:h-[40vh]  rounded-3xl bg-neutral-900">
            <div className="h-[30vh] w-full  p-3">
              <div className=" h-full rounded-3xl flex justify-center items-center bg-black">
                <p className="sm:text-[2.4rem] text-[2rem] bg-gradient-to-r from-red-500 to-gray-400 bg-clip-text text-transparent">My Projects</p>
              </div>
            </div>
            <div className="flex items-center justify-between p- m-2 pl-2">
              <p className="sm:text-[1.5rem] text-[1.2rem] ">Take a look</p>
              <p>
                <BiLogInCircle className="sm:text-[2.8rem] text-[2.3rem] " />
              </p>
            </div>
          </div>
          <div className="col-span-1 sm:h-[40vh]  rounded-3xl bg-neutral-900">
            <div className="h-[30vh] w-full  p-3">
              <div className=" h-full rounded-3xl flex justify-center items-center bg-black">
                <p className="sm:text-[2.4rem] text-[2rem] bg-gradient-to-r from-white to-gray-800 bg-clip-text text-transparent ">About Me</p>
              </div>
            </div>
            <div className="flex items-center justify-between p- m-2 pl-2">
              <p className="sm:text-[1.5rem] text-[1.2rem] ">Take a look</p>
              <p>
                <BiLogInCircle className="sm:text-[2.8rem] text-[2.3rem] " />
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-12 col-span-1 sm:h-[40vh]  grid sm:grid-cols-12 gap-4">
          <div className="sm:col-span-3 col-span-1 h-[40vh]  rounded-3xl bg-neutral-900">
            <div className="h-[30vh] w-full  p-3">
              <div className=" h-full rounded-3xl flex justify-center items-center bg-black">
                <p className="sm:text-[2.4rem] text-[2rem] bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent ">Live Projects</p>
              </div>
            </div>
            <div className="flex items-center justify-between  m-2 pl-2">
              <p className="sm:text-[1.5rem] text-[1.2rem] ">Take a look</p>
              <p >
                <BiLogInCircle className="sm:text-[2.8rem] text-[2.3rem]" />
              </p>
            </div>
          </div>
          <div className="sm:col-span-6 col-span-1 sm:h-[40vh]  grid grid-cols-4">
            <div className="col-span-1  h-[20vh] flex items-center justify-center">
            <SiMongodb  className="sm:text-[2.8rem] text-[2.3rem] text-green-500"/>
              
            </div>
            <div className="col-span-1  h-[20vh] flex items-center justify-center">
              <SiExpress className="sm:text-[2.8rem] text-[2.3rem] "/>
              
            </div>
            <div className="col-span-1  h-[20vh] flex items-center justify-center ">
            <FaReact className="sm:text-[2.8rem] text-[2.3rem] text-blue-600"/>
              
            </div>
            <div className="col-span-1  h-[20vh] flex items-center justify-center">
            <FaNodeJs className="sm:text-[2.8rem] text-[2.3rem] text-green-400"/>
            </div>
            <div className="col-span-1  h-[20vh] flex items-center justify-center">
              <IoLogoJavascript className="sm:text-[2.8rem] text-[2.3rem] "/>
            </div>
            <div className="col-span-1  h-[20vh] flex items-center justify-center">
              <FaPython className="sm:text-[2.8rem] text-[2.3rem] "/>
            </div>
            <div className="col-span-1  h-[20vh] flex items-center justify-center">
              <FaJava className="sm:text-[2.8rem] text-[2.3rem] "/>
            </div>
            <div className="col-span-1  h-[20vh] flex items-center justify-center">
                <FaGitAlt className="sm:text-[2.8rem] text-[2.3rem] "/>
            </div>
            

          </div>
          <div className="sm:col-span-3 col-span-1 h-[40vh]  rounded-3xl bg-neutral-900">
            <div className="h-[30vh] w-full  p-3">
              <div className=" h-full rounded-3xl flex justify-center items-center bg-black">
                <p className="sm:text-[2.4rem] text-[2rem] bg-gradient-to-r from-zinc-400 to-violet-500 bg-clip-text text-transparent">Let’s Connect</p>
              </div>
            </div>
            <div className="flex items-center justify-between p- m-2 pl-2">
              <p className="sm:text-[1.5rem] text-[1.2rem] ">Take a look</p>
              <p>
                <BiLogInCircle className="sm:text-[2.8rem] text-[2.3rem]  " />
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-12 col-span-1 h-[40vh]  grid sm:grid-cols-1 gap-8 bg-neutral-900 rounded-3xl">
          <div className="col-span-1 h-[40vh]  p-12 flex flex-col items-center ">
            <p className="sm:text-[4rem] text-[2.4rem] gap-3 sm:flex bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
             Let’s Work Together
            </p>
            <button className=" sm:mt-6 mt-3 p-2 sm:w-[13%] w-[70%] rounded-full text-center sm:text-[1.2rem] bg-gradient-to-r from-sky-500 to-red-500">
              Reach out me
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
