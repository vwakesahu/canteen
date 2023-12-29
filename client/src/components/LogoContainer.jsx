import React from "react";
import { Logo } from "../assets";

const LogoContainer = () => {
  return (
    <div className="flex items-center gap-1">
      <img src={Logo} alt="logo-image" className="w-20 h-auto" />
      <div className="flex flex-col justify-center">
        <p className="text-xl font-semibold">Canteen</p>
        <p className="text-[0.7rem] -mt-2 text-red-800">- By Half Engineers</p>
      </div>
    </div>
  );
};

export default LogoContainer;
