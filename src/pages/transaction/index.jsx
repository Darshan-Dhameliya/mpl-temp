import DropDownIcon from "@/assets/svg/DropDownIcon";
import Logout from "@/assets/svg/Logout";
import Settings from "@/assets/svg/siderbar/Setting";
import TransactionIcon from "@/assets/svg/siderbar/Transaction";
import AllDeposit from "@/components/transaction/allDeposit";
import Deposit from "@/components/transaction/deposit";
import Withdraw from "@/components/transaction/withdraw";
import React, { useState } from "react";

export default function Transaction() {
  const [activeId, setactiveId] = useState(1);
  const chnageActiveid = (num) => () => setactiveId(num);

  return (
    <div className=" p-4">
      <div className="flex flex-row text-white font-bold gap-2 text-2xl ">
        <TransactionIcon />
        Transaction
      </div>
      <div class="grid lg:grid-cols-4 text-[#80879A] gap-3">
        <div
          className="rounded-lg h-fit col-span-1 p-4 flex flex-col gap-3"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          {[
            { id: 1, name: "All Transaction" },
            { id: 2, name: "Deposit" },
            { id: 3, name: "Withdraw" },
          ].map((item) => (
            <div
              className={`${
                activeId === item.id ? " text-white  bg-[#2F3543]" : ""
              } cursor-pointer py-2 ps-4 rounded-lg hover:text-white`}
              onClick={chnageActiveid(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div
          class="col-span-3 h-fit rounded-lg py-6 px-4 text-[#80879A]"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          {activeId == 1 && <AllDeposit />}
          {activeId == 2 && <Deposit />}
          {activeId == 3 && <Withdraw />}
        </div>
      </div>
    </div>
  );
}
