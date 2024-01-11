import React, { useState } from "react";
import { BgLogin } from "../assets";
import LogoContainer from "./LogoContainer";
import InputContainer from "./InputContainer";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      <img
        src={BgLogin}
        alt="login bg image"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-[80%] h-full md:w-508  bg-opacity-60 backdrop-filter backdrop-blur-md bg-white px-12 flex flex-col items-center gap-2">
        <LogoContainer />

        <div className="mt-16">
          <p className="text-[1.5rem] text-center mb-10">
            Savor the Flavor: Log in for a Taste Adventure! 🌮🔑
          </p>
          <form action="" className="flex flex-col gap-2">
            <InputContainer
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.value)}
              value={email}
            />
            <InputContainer
              type="text"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.value)}
              value={password}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("Email: ", email, "Password: ", password);
              }}
              className="bg-red-700 text-white py-2 rounded-lg mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
