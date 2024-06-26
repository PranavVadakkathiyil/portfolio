import React from "react";
import { MdMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin,FaGithub  } from "react-icons/fa";
import { FaXTwitter,FaMedium} from "react-icons/fa6"; 
const Contact = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-12 grid-cols-1 w-scree gap-5 sm:p-6 p-2 bg-black text-white">
        <div className="sm:col-span-4 col-span-1 sm:h-[85vh]  rounded-3xl bg-neutral-900 ">
          <p className="text-[1.3rem] sm:text-[1.3rem] text-center sm:p-6 p-3 ">
            CONTACT
          </p>
          <div className="h-[20vh]  flex justify-around items-center">
            
              
              <MdMailOutline className="text-[2rem] " />
           
            <div>
              <p>MAIL TO ME</p>
              <p>vpranav0801@gamil.com</p>
            </div>
          </div>
          <div className="h-[20vh]  flex justify-around items-center pr-[3rem]">
            <IoLocationSharp className="text-[2rem]" />
            <div>
              <p>LOCATION</p>
              <p>Kochi, Kerala, India</p>
            </div>
          </div>
          <div className="h-[20vh] ">
          <div>
              <p className="text-center pt-2">ACTIVE ON</p>
              <div className="flex h-[13vh] items-center justify-center gap-5 sm:gap-3 sm:text-[1.5rem] text-[1.2rem]">
                <FaLinkedin/>
                <FaGithub />
                <FaXTwitter/>
                <FaMedium/>
              </div>
              
            </div>
          </div>
        </div>
        <div className="sm:col-span-8 col-span-1 sm:h-[30vh]  p-6 rounded-3xl bg-neutral-900">
            <p className="sm:text-[4rem] text-[2rem] gap-3 sm:flex bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Let’s Work <p>Together.</p></p>
            <button className=" sm:mt-0 mt-3 p-2 sm:w-[25%] w-[60%] rounded-full text-center sm:text-[1.2rem] bg-gradient-to-r from-sky-500 to-red-500">Reach out me</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
