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

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const setActiveRoute = (title) => {
    setActive(
      navigation.findIndex(
        (item) => item.title.toLowerCase() === title.toLowerCase()
      )
    );
  };
  return (
    <aside
      className={`w-64 bg-darkSecondary mt-16  sidebar-sahdow text-white  fixed inset-0 overflow-y-auto transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform duration-300 ease-in-out`}
    >
      <nav className="flex-col  flex justify-between content-between h-full  ">
        <div className="flex-col mt-8 gap-y-1 flex justify-center">
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
