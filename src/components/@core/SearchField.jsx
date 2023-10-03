import SearchIcon from "@/assets/svg/SearchIcon";
import React from "react";

export default function SearchField(props) {
  const { className, iconSize } = props;
  return (
    <>
      <div className="relative lap:w-60 mobtab:w-1/2">
        <input
          type={"text"}
          placeholder="Search For Games"
          {...props}
          className={`w-full rounded-full transition-all duration-300 ease-in-out focus:pl-4 focus:pe-9 focus:text-white text-white outline-none focus:outline-none px-3 py-2 bg-[#292D39] ${className}`}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pe-3">
          <SearchIcon size={iconSize || 16} />
        </div>
      </div>
    </>
  );
}
