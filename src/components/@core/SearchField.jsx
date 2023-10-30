import React, { useEffect, useMemo, useRef, useState } from "react";
import SearchIcon from "@/assets/search_icon.svg";
import CloseIcon from "@/assets/svg/CloseIcon";
import useDisclose from "@/helper/useDisclose";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import GameCard from "./GameCard";

export default function SearchField(props) {
  const { className, parentclassName, iconSize } = props;
  const { isOpen, close, open } = useDisclose();
  const ref = useRef();
  const games = useSelector((state) => state?.app?.games);
  const [searchValue, setSearchValue] = useState("");

  // useOutsideClick(ref, () => {
  //   if (isOpen) close();
  // });
  console.log(games);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const filteredgames = useMemo(
    () =>
      searchValue
        ? games.filter((item) => {
            console.log(
              item?.title?.toLowerCase().indexOf(searchValue.toLowerCase()) !==
                -1,
              item?.name?.toLowerCase().indexOf(searchValue.toLowerCase()) !==
                -1
            );
            return (
              item?.title?.toLowerCase().indexOf(searchValue.toLowerCase()) >=
                0 ||
              item?.name?.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
            );
          })
        : [],
    [games, searchValue]
  );
  console.log(filteredgames);

  if (isOpen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed flex justify-center items-center inset-0 bg-[rgba(0,0,0,0.9)] z-50"
      >
        <CloseIcon
          size={24}
          color={"#fff"}
          className="cursor-pointer fixed right-10 top-10  "
          onClick={close}
        />
        <div className="   w-[60%]">
          <div className={`relative  w-full ${parentclassName || ""}`}>
            <input
              type={"text"}
              ref={ref}
              placeholder="Search For Games"
              onChange={(e) => setSearchValue(e.target.value)}
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
            {/* {filteredgames.length > 0 && ( */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: filteredgames.length ? 1 : 0 }}
              exit={{ opacity: 0 }}
              className="flex  bg-darkSecondary rounded-lg p-2 mt-2 flex-row flex-wrap h-96 overflow-y-auto"
            >
              {filteredgames.map((item) => (
                <div
                  className="flex-none w-1/2 mob:w-1/2 h-1/2  tab:w-1/4 lap:w-1/6 xl:w-1/5 py-2" // Adjusted width here
                  key={item.id}
                >
                  <GameCard
                    // onClick={handleOnClick(item?.gameURL)}
                    imgUrl={item?.imageUrl}
                    name={item?.name || item?.title}
                    companyName={item?.companyName}
                  />
                </div>
              ))}
            </motion.div>
            {/* )} */}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`relative mobtab:w-1/2 w-full ${parentclassName || ""}`}>
      <input
        type={"text"}
        onClick={open}
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
