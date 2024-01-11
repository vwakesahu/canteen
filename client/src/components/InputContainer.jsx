import React from "react";

const InputContainer = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      className="w-full border border-black rounded-lg focus:outline-none px-3 py-2 bg-transparent text-gray-700 placeholder:text-gray-600"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputContainer;
