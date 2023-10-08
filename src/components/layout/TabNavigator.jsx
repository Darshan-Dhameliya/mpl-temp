import Blog from "@/assets/svg/siderbar/Blog";
import Leaderboard from "@/assets/svg/siderbar/Leaderboard";
import Livechat from "@/assets/svg/siderbar/LiveChat";
import useDisclose from "@/helper/useDisclose";
import { useState } from "react";
import { PiListMagnifyingGlassBold } from "react-icons/pi";

// Define your component here...

export default function TabNavigator() {
  const [activeTab, setActiveTab] = useState(1);
  const { isOpen: isMenuShow, toggle: toggleMenu } = useDisclose();
  const tabs = [
    {
      id: 1,
      title: "Browse",
      icon: <PiListMagnifyingGlassBold size={24} />,
      onclick: toggleMenu,
    },
    {
      id: 2,
      title: "Leaderboard",
      icon: <Leaderboard height={24} width={24} />,
    },
    {
      id: 3,
      title: "Blog",
      icon: <Blog height={24} width={24} />,
    },
    {
      id: 4,
      title: "Live chat",
      icon: <Livechat size={24} />,
    },
  ];

  return (
    <>
      {isMenuShow && (
        <div className="fixed inset-0 mt-16 h-screen z-50 bg- w-screen">
          dasrahn
        </div>
      )}
      <div className="lap:hidden h-16 z-50 fixed bottom-0 left-0 w-full bg-gray-800">
        <nav className="flex justify-between h-full">
          {tabs.map((item) => (
            <div
              className={`${
                activeTab === item.id
                  ? "border-t-indigo-700 border-t-4"
                  : "bg-gray-800"
              } px-4 py-2 text-white items-center justify-center flex flex-col`}
              onClick={() => {
                if (item.onclick && item.id === 1) {
                  item.onclick();
                }
                setActiveTab(item.id);
              }}
            >
              {item.icon}
              {item.title}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
