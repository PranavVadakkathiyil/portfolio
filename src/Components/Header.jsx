import React from "react";
import logo from "../Img/logo.png";
const Header = () => {
  
  return (
    <div>
      <header className="flex items-center sm:justify-around justify-between  bg-black text-white">
        <img src={logo} alt="logo" className="sm:w-[70px] w-[60px] " />

        <ul className="sm:flex hidden gap-6 items-center text-gray-400">
          <li className="mr-9 cursor-pointer">
            Home
          </li>
          <li className="mr-9 cursor-pointer">
            About
          </li>
          <li className="mr-9 cursor-pointer">
            Projects
          </li>

          <li className="mr-9 cursor-pointer">
            Contact
          </li>
          
        </ul>
        <div className="sm:mr-9 mr-2 flex sm:w-[10%] bg-gradient-to-r from-zinc-700 to-slate-900  items-center justify-center  p-3 rounded-2xl cursor-pointer">
            
          <p className="text-[0.9rem]">Let’s Connect</p>
          </div>
        
      </header>
    </div>
  );
};

export default Header;
