import Leaderboard from "@/assets/svg/siderbar/Leaderboard";
import GameCard from "@/components/@core/GameCard";
import SearchField from "@/components/@core/SearchField";
import Table from "@/components/@core/Table";
import React from "react";

export default function Favorite() {
  const imagedata = [
    {
      imgPath: require("../../assets/games/1_Skull_Fiesta.png"),
    },
    {
      imgPath: require("../../assets/games/2_Duck_Trap.png"),
    },

    {
      imgPath: require("../../assets/games/6_Aladdin_Emperors.png"),
    },
    {
      imgPath: require("../../assets/games/7_Lucky_Jungle.png"),
    },
  ];
  return (
    <>
      <div className="flex items-center gap-4 mt-4 m text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="22"
          viewBox="0 0 16 20"
          fill="none"
        >
          <path
            d="M1.5918 7.95933C1.5918 8.38149 1.7595 8.78635 2.05801 9.08486C2.35652 9.38337 2.76139 9.55108 3.18354 9.55108L7.95879 9.55108C9.22526 9.55108 10.4399 10.0542 11.3354 10.9497C12.2309 11.8452 12.734 13.0598 12.734 14.3263L12.734 17.5098C12.734 17.932 12.9017 18.3368 13.2002 18.6353C13.4988 18.9339 13.9036 19.1016 14.3258 19.1016C14.7479 19.1016 15.1528 18.9339 15.4513 18.6353C15.7498 18.3368 15.9175 17.932 15.9175 17.5098L15.9175 14.3263C15.915 12.2163 15.0757 10.1934 13.5837 8.70143C12.0917 7.20943 10.0688 6.37011 7.95879 6.36758L3.18354 6.36758C2.76139 6.36758 2.35652 6.53528 2.05801 6.83379C1.7595 7.1323 1.5918 7.53717 1.5918 7.95933Z"
            fill="#2191F7"
          />
          <path
            d="M5.45389 0.466822L0.97026 5.33301C0.347509 6.04037 -3.90648e-07 6.98098 -3.47888e-07 7.95923C-3.05127e-07 8.93748 0.347509 9.87809 0.97026 10.5854L5.45389 15.4516C5.72906 15.7502 6.10228 15.918 6.49143 15.918C6.88059 15.918 7.2538 15.7502 7.52897 15.4516C7.80415 15.153 7.95874 14.7481 7.95874 14.3258C7.95874 13.9035 7.80415 13.4986 7.52897 13.2L3.04437 8.3338C2.9527 8.2343 2.90121 8.09938 2.90121 7.9587C2.90121 7.81802 2.9527 7.68309 3.04437 7.5836L7.52897 2.71847C7.80415 2.41988 7.95874 2.01491 7.95874 1.59265C7.95874 1.17038 7.80415 0.765409 7.52897 0.466822C7.2538 0.168235 6.88058 0.000490842 6.49143 0.000490859C6.10228 0.000490876 5.72906 0.168235 5.45389 0.466822Z"
            fill="#2191F7"
          />
        </svg>
        <div className="font-bold text-lg">Recently Played</div>
      </div>
      <SearchField className="w-full my-5 h-12" iconSize={24} />
      <div className="flex flex-row flex-wrap">
        {imagedata.map((item, index) => (
          <div
            className="w-1/2 p-2 mob:w-1/3 tab:w-1/4 lap:w-1/4 xl:w-1/5 "
            key={index}
          >
            <GameCard imgUrl={item.imgPath} />
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