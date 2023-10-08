import Leaderboard from "@/assets/svg/siderbar/Leaderboard";
import GameCard from "@/components/@core/GameCard";
import SearchField from "@/components/@core/SearchField";
import Table from "@/components/@core/Table";
import games from "@/provider/games";
import React from "react";

export default function Favorite() {
  const handleOnClick = (gameURL) => () => {
    if (gameURL) {
      window.open(gameURL, "_blank");
    }
  };
  return (
    <>
      <div className="flex items-center gap-2 mt-4 m text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="18"
          viewBox="0 0 25 21"
          fill="none"
        >
          <path
            d="M1.03082e-07 7.27889V6.36737C8.55026e-05 6.33201 0.00507629 6.29681 0.0148496 6.26263C0.02473 6.22984 0.0320659 6.19644 0.0368011 6.16268C0.175416 4.68547 0.841562 3.29331 1.92979 2.20657C4.49618 -0.406505 8.84967 -0.720122 11.8241 1.49016C11.9532 1.58771 12.0824 1.68946 12.2115 1.7936C12.2941 1.86055 12.4005 1.89675 12.5102 1.8952C12.6199 1.89365 12.7251 1.85447 12.8055 1.78522H12.8087C13.3119 1.34323 13.8888 0.979452 14.517 0.70791C17.2932 -0.456181 19.9171 -0.189847 22.3066 1.54582C23.9245 2.72248 24.7948 4.32168 24.9717 6.23031C25.1086 7.70443 24.7374 9.08997 24.093 10.4228C23.2163 12.2375 21.9089 13.7745 20.4349 15.1929C18.1197 17.4241 15.4635 19.2628 12.6699 20.9416C12.5556 21.0104 12.473 21.0253 12.3471 20.9487C10.5012 19.8289 8.69989 18.6523 7.02189 17.3194C5.22962 15.8968 3.56453 14.3622 2.21904 12.5529C1.29772 11.3152 0.569447 9.99311 0.218224 8.51062C0.12719 8.12638 0.0742477 7.73256 0.00581079 7.34413C0.00192728 7.32257 -1.63098e-05 7.30075 1.03082e-07 7.27889Z"
            fill="white"
          />
        </svg>
        <div className="font-bold">Favourite</div>
      </div>
      <SearchField className="w-full my-5 h-12" iconSize={24} />
      <div className="flex flex-row flex-wrap">
        {games.slice(0, 6).map((item, index) => (
          <div
            className="w-1/2 p-2 mob:w-1/3 tab:w-1/4 lap:w-1/5 xl:w-1/5 "
            key={index}
          >
            <GameCard imgUrl={item.img} onClick={handleOnClick(item.gameURL)} />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="text-light m-4 flex items-center gap-2 text-white">
          <Leaderboard />
          <div className="text-2xl bold">Leaderboard</div>
        </div>
        <Table />
      </div>
    </>
  );
}
