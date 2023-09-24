import React from "react";
import FlagImg from "@/assets/flag.png";
import Image from "next/image";

export default function Language() {
  return (
    <>
      <div className="text-2xl text-white">Language</div>
      <div>
        <div className="bg-[#2F3442] w-fit rounded-lg mt-4 px-4 py-2">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={FlagImg}
              alt="Your Image"
              className="rounded-full border w-8 h-8"
            />
            <div className="text-white me-5">IND</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 7 14"
              fill="none"
            >
              <path
                d="M6.12332 4.69004L2.19398 0.409845C1.95288 0.147338 1.62592 -8.74766e-05 1.28503 3.89413e-08C0.944135 8.75544e-05 0.617239 0.147681 0.37625 0.410311C0.135261 0.672942 -8.0306e-05 1.0291 3.57492e-08 1.40042C8.03775e-05 1.77175 0.135576 2.12784 0.376679 2.39034L4.30602 6.66961C4.34592 6.71295 4.37757 6.76445 4.39917 6.82114C4.42077 6.87784 4.43188 6.93862 4.43188 7C4.43188 7.06138 4.42077 7.12216 4.39917 7.17885C4.37757 7.23555 4.34592 7.28705 4.30602 7.33039L0.376679 11.6097C0.135576 11.8722 8.03775e-05 12.2282 3.57492e-08 12.5996C-8.0306e-05 12.9709 0.135261 13.3271 0.37625 13.5897C0.617239 13.8523 0.944135 13.9999 1.28503 14C1.62592 14.0001 1.95288 13.8527 2.19398 13.5902L6.12332 9.30996C6.68473 8.69674 7 7.86604 7 7C7 6.13396 6.68473 5.30326 6.12332 4.69004Z"
                fill="#8D93A9"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
