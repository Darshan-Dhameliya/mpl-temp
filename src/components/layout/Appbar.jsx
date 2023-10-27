// components/Navbar.js
import Logo from "@/assets/logo.png";
import React from "react";
import FlagImg from "@/assets/flag.png";
import Image from "next/image";
import { useRouter } from "next/router";
import BitCoin from "@/assets/svg/siderbar/BitCoin";
import Button from "../@core/Button";
import NotificationIcon from "@/assets/svg/siderbar/NotificationIcon";
import SearchField from "../@core/SearchField";
import SecureSection from "@/helper/SecureSection";
import { useSelector } from "react-redux";

const AppBar = ({ openLogin, openRegsiter, openNotification }) => {
  const router = useRouter();
  const isloggedin = useSelector((state) => state.user.isloggedin);

  return (
    <nav className="bg-darkPrimary z-40 fixed left-0 right-0 mobtab:px-4 lap:px-8 h-16 flex items-center justify-between">
      <div className="lap:gap-16 mobtab:w-full justify-between  flex-row flex items-center">
        <Image
          src={Logo}
          onClick={() => router.push("/")}
          className="w-32 h-full cursor-pointer object-cover"
          alt="something went wrong"
        />
        <SecureSection>
          <SearchField parentclassName={"mr-2"} />
        </SecureSection>

        {isloggedin === false && (
          <div className="lap:hidden flex flex-row gap-2 items-center">
            <button
              onClick={openLogin}
              className="px-2 h-8 font-semibold text-sm uppercase rounded-md bg-blue-500 hover:bg-blue-600 text-white"
            >
              Sign In
            </button>
            <button
              onClick={openRegsiter}
              className="px-2 h-8 font-semibold uppercase rounded-md bg-red-500 hover:bg-red-600 text-white"
            >
              Registration
            </button>
          </div>
        )}
      </div>
      <div className="space-x-4 lap:flex hidden h-10 py-4  items-center">
        <SecureSection>
          <div
            role="button"
            className="text-white flex gap-2 flex-row items-center bg-[#292D39] py-2 px-3 rounded-lg hover:text-white"
          >
            2339090
            <BitCoin size={16} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
            >
              <path
                d="M8.17743 5.86729L11.9369 2.10224C12.1675 1.87122 12.297 1.55793 12.2969 1.2313C12.2968 0.904659 12.1672 0.591431 11.9365 0.360518C11.7058 0.129605 11.393 -7.69878e-05 11.0668 -1.95126e-08C10.7407 7.69488e-05 10.4279 0.129907 10.1973 0.360929L6.4387 4.12598C6.40062 4.16421 6.35539 4.19454 6.3056 4.21523C6.2558 4.23592 6.20242 4.24658 6.1485 4.24658C6.09459 4.24658 6.0412 4.23592 5.99141 4.21523C5.94161 4.19454 5.89638 4.16421 5.8583 4.12598L2.09966 0.360929C1.86909 0.129907 1.55633 7.65473e-05 1.23018 -4.49486e-07C0.904023 -7.74463e-05 0.5912 0.129605 0.36052 0.360517C0.129842 0.59143 0.000203093 0.904659 0.000125831 1.2313C4.9523e-05 1.55793 0.12954 1.87122 0.36011 2.10224L4.11957 5.86729C4.65819 6.40523 5.38783 6.70732 6.1485 6.70732C6.90918 6.70732 7.63881 6.40523 8.17743 5.86729Z"
                fill="white"
              />
            </svg>
          </div>
          <Button variant="secondary" className={"border-0"}>
            Wallet{" "}
          </Button>
          <NotificationIcon
            role="button"
            size={24}
            showDot={false}
            onClick={openNotification}
          />
          <div className="border-l border-gray-600 h-8" />
        </SecureSection>
        {isloggedin === false && (
          <>
            <button
              onClick={openLogin}
              className="px-8 font-semibold uppercase py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
            >
              Sign In
            </button>
            <button
              onClick={openRegsiter}
              className="px-3 h-10 font-semibold py-2 uppercase rounded-md bg-red-500 hover:bg-red-600 text-white"
            >
              Registration
            </button>
          </>
        )}
        <Image
          src={FlagImg}
          alt="Your Image"
          className="rounded-full w-8 h-8"
        />
      </div>
    </nav>
  );
};

export default AppBar;
