import Plus from "@/assets/svg/18Plus";
import Image from "next/image";
import React from "react";

export default function LeftSide({ title }) {
  return (
    <>
      <Image
        src={require("@/assets/auth_bg.svg")}
        className="w-100 h-100 object-cover absolute -z-10 inset-0"
        alt="something went weong"
      />
      <div className="flex w-full flex-col self-end gap-3 items-center">
        <div className="text-white text-2xl font-bold">
          {title || "Registration an Account"}
        </div>
        <div className="text-[#8D93A9] text-center">
          By accessing the site I confirm that I am
          <br />
          18 years or older and that I agree to
          <br />
          the <span className="underline text-white">Terms of Service</span>
        </div>
        <div className="flex  flex-row gap-3 items-center">
          <Plus className="h-8 w-8" />
          <Image
            src={require("@/assets/Ball_icon.png")}
            className="w-14 object-contain"
            alt="something went weong"
          />
        </div>
      </div>
    </>
  );
}
