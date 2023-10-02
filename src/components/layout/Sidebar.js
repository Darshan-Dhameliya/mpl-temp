// components/Sidebar.js
import Link from "next/link";
import Affiliate from "@/assets/svg/siderbar/Affiliate";
import VIPClub from "@/assets/svg/siderbar/VIPClub";
import Blog from "@/assets/svg/siderbar/Blog";
import Transaction from "@/assets/svg/siderbar/Transaction";
import Leaderboard from "@/assets/svg/siderbar/Leaderboard";
import Deposit from "@/assets/svg/siderbar/Deposit";
import Withdraw from "@/assets/svg/siderbar/Withdraw";
import Livechat from "@/assets/svg/siderbar/LiveChat";
import Settings from "@/assets/svg/siderbar/Setting";
import { useState } from "react";
import SupportSytem from "@/assets/svg/siderbar/SupportSytem";
import { useRouter } from "next/router";
import useDisclose from "@/helper/useDisclose";
import DropDownIcon from "@/assets/svg/DropDownIcon";
import AddCash from "@/assets/svg/siderbar/AddCash";
import Promocode from "@/assets/svg/siderbar/Promocode";
import ManageBenificiary from "@/assets/svg/siderbar/ManageBenificiary";
import AddBenificiary from "@/assets/svg/siderbar/AddBenificiary";
import Profile from "@/assets/svg/siderbar/Profile";

const navigation = [
  {
    title: "Affiliate",
    href: "",
    icon: (props) => <Affiliate {...props} />,
  },
  {
    title: "VIP Club",
    href: "",
    icon: (props) => <VIPClub {...props} />,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: (props) => <Blog {...props} />,
  },
  {
    title: "Transaction",
    href: "/transaction",
    icon: (props) => <Transaction {...props} />,
  },
  {
    title: "Leaderboard",
    href: "leaderboard",
    icon: (props) => <Leaderboard {...props} />,
  },
  {
    title: "Deposit",
    href: "",
    icon: (props) => <Deposit {...props} />,
  },
  {
    title: "Withdraw",
    href: "",
    icon: (props) => <Withdraw {...props} />,
  },
  {
    title: "Live Chat",
    href: "",
    icon: (props) => <Livechat {...props} />,
  },
  {
    title: "Setting",
    href: "/settings",
    icon: (props) => <Settings {...props} />,
  },
];

const profileDropDown = [
  {
    title: "Wallet",
    href: "",
    icon: (props) => <Deposit {...props} />,
  },
  {
    title: "Add Cash",
    href: "",
    icon: (props) => <AddCash {...props} />,
  },
  {
    title: "Apply promocode",
    href: "",
    icon: (props) => <Promocode {...props} />,
  },
  {
    title: "Manage Beneficiary",
    href: "",
    icon: (props) => <ManageBenificiary {...props} />,
  },
  {
    title: "Add Beneficiary",
    href: "",
    icon: (props) => <AddBenificiary {...props} />,
  },
];

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const router = useRouter();
  const [active, setActive] = useState(-1);
  const setActiveRoute = (title) => {
    setActive(
      navigation.findIndex(
        (item) => item.title.toLowerCase() === title.toLowerCase()
      )
    );
  };
  const {
    isOpen: isMenuOpen,
    toggle: toggleMenu,
    close: closeMenu,
  } = useDisclose(false);
  return (
    <aside
      className={`w-64 bg-darkSecondary mt-16  sidebar-sahdow text-white fixed inset-0  transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform duration-300 ease-in-out`}
    >
      <nav className="flex-col  flex justify-between content-between h-full  ">
        <div className="flex-col mt-8 gap-y-1 flex justify-center">
          <div
            role="button"
            onClick={() => router.push("/favorite")}
            className="flex items-center justify-between rounded-xl mx-4 px-3 py-3 bg-gradient-to-r from-red-500 to-pink-600"
          >
            <div className="flex items-center gap-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                viewBox="0 0 25 21"
                fill="none"
              >
                <path
                  d="M1.03082e-07 7.27889V6.36737C8.55026e-05 6.33201 0.00507629 6.29681 0.0148496 6.26263C0.02473 6.22984 0.0320659 6.19644 0.0368011 6.16268C0.175416 4.68547 0.841562 3.29331 1.92979 2.20657C4.49618 -0.406505 8.84967 -0.720122 11.8241 1.49016C11.9532 1.58771 12.0824 1.68946 12.2115 1.7936C12.2941 1.86055 12.4005 1.89675 12.5102 1.8952C12.6199 1.89365 12.7251 1.85447 12.8055 1.78522H12.8087C13.3119 1.34323 13.8888 0.979452 14.517 0.70791C17.2932 -0.456181 19.9171 -0.189847 22.3066 1.54582C23.9245 2.72248 24.7948 4.32168 24.9717 6.23031C25.1086 7.70443 24.7374 9.08997 24.093 10.4228C23.2163 12.2375 21.9089 13.7745 20.4349 15.1929C18.1197 17.4241 15.4635 19.2628 12.6699 20.9416C12.5556 21.0104 12.473 21.0253 12.3471 20.9487C10.5012 19.8289 8.69989 18.6523 7.02189 17.3194C5.22962 15.8968 3.56453 14.3622 2.21904 12.5529C1.29772 11.3152 0.569447 9.99311 0.218224 8.51062C0.12719 8.12638 0.0742477 7.73256 0.00581079 7.34413C0.00192728 7.32257 -1.63098e-05 7.30075 1.03082e-07 7.27889Z"
                  fill="white"
                />
              </svg>
              Favourite
            </div>
            <div className="text-sm text-white bg-pink-700 rounded-lg p-1">
              12
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #282C37 0.17%, #2B2F3A 92.09%, #2B2F3A 99.83%)",
              boxShadow: "0px 1px 0px 0px #303647 inset",
            }}
            className="flex items-center gap-4 text-white rounded-xl mx-4 my-3 px-3 h-12  shadow-inner"
          >
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
            Recently Played
          </div>

          <div
            className={`${
              isMenuOpen ? "text-[#fff] bg-[#292D38]" : "text-[#80879A]"
            } select-none hs-collapse-toggle cursor-pointer overflow-hidden`}
          >
            <div className="flex py-2 px-3 justify-between">
              <div className="flex flex-row gap-3">
                <Profile height={24} width={24} />
                Profile
              </div>
              <DropDownIcon
                size={24}
                className={`transition-transform hs-collapse-toggle ${
                  isMenuOpen ? "rotate-90" : "rotate-0"
                }`}
                onClick={toggleMenu}
              />
            </div>
            <div
              className={`${
                isMenuOpen ? "h-auto" : "h-0"
              } overflow-hidden transition-all`}
            >
              {profileDropDown.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveRoute(item.title);
                    router.push(item?.href);
                  }}
                  className={`ms-2 gap-4 ${
                    active === idx ? "bg-[#292D38]" : "bg-inherit"
                  } hover:bg-[#292D38] cursor-pointer px-4 py-1 flex-row items-center flex text-base`}
                >
                  {item.icon({
                    height: 16,
                    width: 16,
                  })}
                  <span
                    className={`${"text-[#80879A]"} font-bold hover:text-white`}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {navigation.map((item, idx) => (
            <div
              onClick={() => {
                setActiveRoute(item.title);
                router.push(item?.href);
              }}
              className={`gap-4 ${
                active === idx ? "bg-[#292D38]" : "bg-inherit"
              } hover:bg-[#292D38] cursor-pointer px-4 py-1 flex-row items-center flex text-base`}
            >
              {item.icon({
                heght: 16,
                width: 16,
              })}
              <span
                className={`${active === idx ? "text-white" : "text-[#80879A]"}
              font-bold  hover:text-white`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div
          className={`gap-4 mb-4 hover:bg-[#292D38] cursor-pointer px-4 py-1 flex-row items-center flex text-base`}
        >
          <SupportSytem height={16} width={16} />
          <Link href={"/"}>
            <span className={`text-[#80879A] font-bold  hover:text-white`}>
              Support System
            </span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
