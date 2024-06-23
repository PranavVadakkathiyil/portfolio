import React from "react";

import mainimg from "../Img/main.svg";
const Profile = () => {
  return (
    <div>
      <div className="grid grid-cols-1 h-screen sm:grid-cols-2">
        <div className="col-span-1 bg-black h-[90vh] text-white flex flex-col justify-center items-center">
          <p className="sm:text-[4rem] text-[2rem]  ">Hi there,</p>
          <p className="sm:text-[3.5rem] text-[1.8rem]"> I'm Pranav V</p>
          <p className="sm:text-[3rem] text-[1.4rem]">self-taught developer </p>
        </div>
        <div className="sm:block  col-span-1  h-[90vh] flex items-center justify-center">
          <img src={mainimg} alt="img" className="sm:w-[40rem] sm:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
