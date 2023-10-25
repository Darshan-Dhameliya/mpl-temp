import PasswordEye from "@/assets/svg/PasswordEye";
import useDisclose from "@/helper/useDisclose";
import React from "react";

export default function PasswordFied(props) {
  const { isOpen: isPasswordShow, toggle: togglePasswordShow } =
    useDisclose(false);
  const { className } = props;

  return (
    <div className="relative">
      <input
        type={isPasswordShow ? "text" : "password"}
        {...props}
        autoComplete="off"
        className={`w-full transition-all text-[#626778] duration-300 ease-in-out traistio focus:pl-4 focus:text-white outline-none focus:outline-none px-3 py-2 rounded-md bg-[#2F3442] ${
          className || ""
        }`}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <PasswordEye
          role="button"
          size={24}
          isOpen={isPasswordShow}
          onClick={togglePasswordShow}
        />
      </div>
    </div>
  );
}
