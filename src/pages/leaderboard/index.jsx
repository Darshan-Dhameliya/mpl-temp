import React from "react";
import Leaderboard from "@/assets/svg/siderbar/Leaderboard";
import Table from "@/components/@core/Table";

export default function LeadeBorad() {
  return (
    <div className="mt-4">
      <div className="ms-5">
        <div className="text-light flex items-center gap-2 text-white">
          <Leaderboard />
          <div className="text-2xl bold">Leaderboard</div>
        </div>
        <div className="flex flex-row mt-4 gap-1">
          {["All Time", "Big Win", "Casino Games", "My Win"].map(
            (item, idx) => (
              <div
                key={idx}
                className=" text-white w-fit rounded-t-2xl px-8 py-2 justify-center items-center"
                style={{
                  background:
                    idx === 0
                      ? "linear-gradient(180deg, #313745 0%, #2C3240 100%)"
                      : "#212530",
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
      <Table />
    </div>
  );
}
