import ResponsibleGamlingIcon from "@/assets/svg/siderbar/ResponsibleGamling";
import AceJackpotSafe from "@/components/responsiblegambling/AceJackpotSafe";
import GamblingLimits from "@/components/responsiblegambling/GamblingLimits";
import SelfExclusion from "@/components/responsiblegambling/SelfExclusion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function ResponsibleGamling() {
  const [activeId, setactiveId] = useState(1);
  const chnageActiveidAndCloseDropdown = (num) => () => {
    setactiveId(num);
  };

  const { query } = useRouter();
  useEffect(() => {
    if (query?.id) {
      setactiveId(parseInt(query?.id, 10));
    }
    return () => {};
  }, [query?.id]);

  return (
    <div className=" p-4">
      <div className="flex flex-row text-white font-bold gap-2 mb-3 text-2xl ">
        <ResponsibleGamlingIcon />
        Responsible Gambling
      </div>
      <div class="grid lap:grid-cols-4 text-[#80879A] gap-3">
        <div
          className="rounded-lg mobtab:hidden h-fit col-span-1 p-4 flex flex-col gap-3"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          {[
            { id: 1, name: "Ace Jackpot Safe" },
            { id: 2, name: "Self Exclusion" },
            { id: 3, name: "Gambling Limits" },
          ].map((item) => (
            <div
              key={item.id}
              role="button"
              className={`${
                activeId === item.id ? " text-white  bg-[#2F3543]" : ""
              }  py-2 px-3 rounded-lg focus:outline-gray-500 focus:outline-1  hover:text-white`}
              onClick={chnageActiveidAndCloseDropdown(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div
          class="col-span-3 h-fit rounded-lg p-8 text-[#80879A]"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          {activeId == 1 && <AceJackpotSafe />}
          {activeId == 2 && <SelfExclusion />}
          {activeId == 3 && <GamblingLimits />}
        </div>
        {/* <div class="row-start-1 row-end-4 bg-red-700">03</div> */}
      </div>
    </div>
  );
}
