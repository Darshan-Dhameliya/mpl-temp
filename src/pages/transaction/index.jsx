import TransactionIcon from "@/assets/svg/siderbar/Transaction";
import AllDeposit from "@/components/transaction/allDeposit";
import AddMoney from "@/components/transaction/addMoney";
import Withdraw from "@/components/transaction/withdraw";
import React, { useState } from "react";
import Join from "@/components/transaction/Join";
import Win from "@/components/transaction/Win";
import Refund from "@/components/transaction/Refund";
import Success from "@/components/transaction/Success";
import Failed from "@/components/transaction/Failed";
import Pending from "@/components/transaction/Pending";

const data = [
  { id: 1, name: "All Transaction" },
  { id: 2, name: "Add Money" },
  { id: 3, name: "Withdraw" },
  { id: 4, name: "Join" },
  { id: 5, name: "Win" },
  { id: 6, name: "Refund" },
  { id: 7, name: "Success" },
  { id: 8, name: "Failed" },
  { id: 9, name: "Pending" },
];

export default function Transaction() {
  const [activeId, setactiveId] = useState(1);
  const chnageActiveid = (num) => () => setactiveId(num);

  return (
    <div className=" p-4">
      <div className="flex flex-row text-white font-bold gap-2 text-2xl ">
        <TransactionIcon />
        Transaction
      </div>
      <div class="grid lap:grid-cols-4 text-[#80879A] gap-3">
        <div
          className="rounded-lg h-fit col-span-1 p-4 flex flex-col gap-3"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          {data.map((item) => (
            <button
              className={`${
                activeId === item.id ? " text-white  bg-[#2F3543]" : ""
              } cursor-pointer text-start py-2 ps-4 transition-all rounded-lg hover:bg-[#2F3543] hover:text-white`}
              onClick={chnageActiveid(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div
          class="col-span-3 h-fit rounded-lg py-6 px-4 text-[#80879A]"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          {activeId == 1 && <AllDeposit />}
          {activeId == 2 && <AddMoney />}
          {activeId == 3 && <Withdraw />}
          {activeId == 4 && <Join />}
          {activeId == 5 && <Win />}
          {activeId == 6 && <Refund />}
          {activeId == 7 && <Success />}
          {activeId == 8 && <Failed />}
          {activeId == 9 && <Pending />}
        </div>
      </div>
    </div>
  );
}
