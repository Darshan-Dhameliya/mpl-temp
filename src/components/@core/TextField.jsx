import React from "react";

export default function TextField(props) {
  const { className } = props;
  return (
    <input
      {...props}
      autoComplete={false}
      className={`w-full transition-all duration-300 ease-in-out traistio focus:pl-4 focus:text-white bg-[#212530] text-[#626778] outline-none focus:outline-none px-3 py-2 rounded-md ${className}`}
    />
  );
}
