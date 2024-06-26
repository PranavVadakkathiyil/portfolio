import React from "react";
import { FaLinkedin,FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white h-[30vh] flex flex-col justify-center items-center gap-5">
        <div>
        <ul className="flex sm:gap-[3rem] gap-[1rem]">
            <li className="cursor-pointer text-gray-500 text-[1.07rem] hover:text-[#5B78F6]">Home</li>
            <li className="cursor-pointer text-gray-500 text-[1.07rem] hover:text-[#5B78F6]">About</li>
            <li className="cursor-pointer text-gray-500 text-[1.07rem] hover:text-[#5B78F6]">Projects</li>
            <li className="cursor-pointer text-gray-500 text-[1.07rem] hover:text-[#5B78F6]">Contact</li>
        </ul>
        </div>
        <div className="text-gray-400">
            <p>© 2024 Pranav
            All rights reserved.</p>
        </div>
        <div className="text-gray-400">
            <p className="flex gap-2">Powered by <p className="text-[#495bad]">Pranav V</p></p>
        </div>
        <div className="flex gap-[2rem] text-[#5B78F6]">
            <FaLinkedin/>
            <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
