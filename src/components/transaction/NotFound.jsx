import EmptyTransaction from "@/assets/svg/EmptyTransaction";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col h-96 justify-center items-center text-[#626778]">
      <EmptyTransaction />
      <div className="font-bold text-xl mt-2">No Transaction History</div>
      <div className="text-sm"> You have not played and games.</div>
      <div className="text-sm">Go back to home screen and play games.</div>
    </div>
  );
}
