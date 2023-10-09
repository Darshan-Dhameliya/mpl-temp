import React, { useEffect, useRef, useState } from "react";
import DropDownIcon from "@/assets/svg/DropDownIcon";
import Divider from "../Divider";

const CollapsibleDropdown = ({ items, title, icon, close, onItemClick }) => {
  const containerRef = useRef(null);
  const dropDownIconRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const [activeOption, setactiveOption] = useState(-1);
  const toggleAnimation = () => {
    const container = containerRef.current;
    const toggleBtn = toggleBtnRef.current;
    const dropDownIcon = dropDownIconRef.current;

    if (!container || !dropDownIcon) return;

    if (container.style.maxHeight === "0px") {
      container.style.maxHeight = `${container.scrollHeight}px`;
      toggleBtn.style.color = "#fff";
      toggleBtn.style.background = "#292D38";
      dropDownIcon.style.transform = "rotate(90deg)";
    } else {
      closeAnimation();
    }
  };

  const closeAnimation = () => {
    const container = containerRef.current;
    const toggleBtn = toggleBtnRef.current;
    const dropDownIcon = dropDownIconRef.current;
    if (!container || !dropDownIcon) return;
    container.style.maxHeight = "0px";
    toggleBtn.style.background = "transparent";
    toggleBtn.style.color = "#80879A";
    dropDownIcon.style.transform = "rotate(0deg)";
    setactiveOption(-1);
  };

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (containerRef.current && !containerRef.current.contains(e.target)) {
  //       containerRef.current.style.maxHeight = "0px";
  //       dropDownIconRef.current.style.transform = "rotate(0deg)";
  //       // setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  useEffect(() => {
    if (close) {
      closeAnimation();
    }
    return () => {};
  }, [close]);

  return (
    <div>
      <button
        ref={toggleBtnRef}
        className="flex  text-[#80879A]   py-2 w-full items-center px-4 justify-between"
        onClick={toggleAnimation}
        style={{
          transition: "all 0.2s ease-out",
        }}
      >
        <div className="flex flex-row gap-3">
          {icon}
          {title}
        </div>
        <span ref={dropDownIconRef} className="transition-transform rotate-0">
          <DropDownIcon size={24} />
        </span>
      </button>
      <div
        className="container"
        ref={containerRef}
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "all 0.3s ease-out",
        }}
      >
        <Divider className="m-0" />
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setactiveOption(index);
              onItemClick(item);
            }}
            className={`ps-4 gap-4 ${
              activeOption === index ? " text-[#fff]" : "text-[#80879A]"
            } hover:text-[#fff] bg-[#292D38] cursor-pointer px-4  py-1 flex-row items-center flex `}
          >
            {item.icon({
              height: 16,
              width: 16,
            })}
            <span className={` font-bold hover:text-white`}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleDropdown;
