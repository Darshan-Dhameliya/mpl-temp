import React, { useState } from "react";

export default function TableTabBar() {
  const [selectedIdx, setselectedIdx] = useState(0);
  const changeSelected = (num) => () => setselectedIdx(num);

  return (
    <div className="flex overflow-x-auto flex-row  gap-1">
      {["All Time", "Big Win", "Casino Games", "My Win"].map((item, idx) => (
        <div
          key={item}
          role="button"
          onClick={changeSelected(idx)}
          className={`text-white  flex overflow-hidden rounded-t-xl px-2 sm:px-4 py-2 `}
          style={{
            background:
              idx === selectedIdx
                ? "linear-gradient(180deg, #313745 0%, #2C3240 100%)"
                : "#212530",
            whiteSpace: "nowrap",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
