import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiMysql, SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <div>
      <div className="m-2">
        <div className="mb-4">
          <p className="text-[1rem]  mb-4 pl-2">Dealing with technologies</p>
          <div className="h-full rounded-3xl text-white grid grid-cols-3 sm:grid-cols-12 gap-2">
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <FaReact className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <RiNextjsFill className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <SiTailwindcss className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <FaNodeJs className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <SiMongodb className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <SiExpress className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <FaGithub className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <FaGitAlt className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <FaDocker className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <SiMysql className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex flex-row items-center justify-center">
              <FaReact className="text-blue-400 text-2xl" />
              <p className="text-blue-300 text-[0.5rem]">React-Native</p>
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <SiFirebase className="text-blue-400 text-3xl" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-[1rem]  mb-4 pl-2">
            Working with Programming Languages
          </p>
          <div className="h-full rounded-3xl text-white grid grid-cols-3 sm:grid-cols-12 gap-2">
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <IoLogoJavascript className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <FaPython className="text-blue-400 text-3xl" />
            </div>
            <div className="col-span-1 h-[100px] border rounded-xl flex items-center justify-center">
              <FaJava className="text-blue-400 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
