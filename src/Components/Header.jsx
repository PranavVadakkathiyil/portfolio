import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaGithub,
  FaRegAddressCard,
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import logo from "../Img/logo.png";
const Header = () => {
  const [menu, setmenu] = useState(false)
  console.log(menu)
  return (
    
    <div>
      <header className="flex items-center sm:justify-between justify-between border">
        <img src={logo} alt="logo" className="sm:w-[70px] w-[60px] " />

        <ul className="sm:flex hidden gap-6 items-center">
        <li className="mr-9 cursor-pointer">
                  <FaLinkedin  />
                </li>
                <li className="mr-9 cursor-pointer">
                  <FaGithub />
                </li>
                <li className="mr-9 cursor-pointer">
                  <FaMedium />
                </li>

                <li className="mr-9 cursor-pointer">
                  <FaXTwitter />
                </li>
          <li className="mr-9 flex items-center border p-2 rounded-full cursor-pointer">
            <FaRegAddressCard className="w-[25px]"/>
          <p>Download</p>
          </li>
        </ul>
        <p className="sm:hidden flex  p-5">
          <CiMenuFries className=""  onClick={()=>setmenu(!menu)}/>
        </p>
        
      </header>
    </div>
  );
};

export default Header;
