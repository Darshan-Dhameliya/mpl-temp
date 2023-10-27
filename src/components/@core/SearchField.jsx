import SearchIcon from "@/assets/search_icon.svg";
import React from "react";

export default function SearchField(props) {
  const { className, parentclassName, iconSize } = props;

  return (
    <div className={`relative mobtab:w-1/2 w-full ${parentclassName || ""}`}>
      <input
        type={"text"}
        placeholder="Search For Games"
        style={{
          backgroundImage: `url(${SearchIcon.src})`,
          backgroundPosition: "top 9px right 14px ",
          backgroundSize: iconSize || 20,
          backgroundRepeat: "no-repeat",
          minWidth: 200,
        }}
        className={`w-full rounded-full transition-all duration-300 ease-in-out pl-4 focus:pl-6 focus:pe-9 focus:text-white text-white outline-none focus:outline-none py-2 bg-[#292D39] ${
          className || ""
        }`}
      />
    </div>
  );
}
