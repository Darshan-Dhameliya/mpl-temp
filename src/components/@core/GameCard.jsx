/* eslint-disable @next/next/no-img-element */
import AceIcon from "@/assets/svg/AceIcon";
import PlayIcon from "@/assets/svg/PlayIcon";
import GamePlaceholder from "@/assets/gamePlaceholder.png";
import React from "react";

export default function GameCard(props) {
  const { width, imgUrl, onClick, name, companyName } = props;
  return (
    <div
      role="button"
      style={{
        background: "linear-gradient(180deg, #333947 0%, #2C3240 100%)",
        width: width || "calc(100% - 8px)", // Adjust the width and margin accordingly
        margin: "4px", // Add margin to separate the cards
      }}
      onClick={onClick}
      className="group h-full hover:-translate-y-2 duration-300 transition-all relative overflow-hidden cursor-pointer flex rounded-xl justify-center items-center"
    >
      <div
        className="group-hover:opacity-100 delay-200 duration-500 opacity-0 text-white flex flex-col justify-between transition-all  absolute inset-0 z-10"
        style={{
          background: "rgba(47,50,59,0.6)",
        }}
      >
        <div className="mt-5 ml-4">{name}</div>
        <div className="flex justify-center">
          <PlayIcon height={24} width={24} />
        </div>
        <div className="mb-3 text-center">{companyName}</div>
      </div>
      {imgUrl ? (
        <img
          src={imgUrl}
          className="h-full w-full object-cover"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={GamePlaceholder?.src}
          alt="something went wrong"
        />
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <AceIcon height={96} width={96} />
        </div>
      )}
    </div>
  );
}
