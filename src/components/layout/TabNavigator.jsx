import Blog from "@/assets/svg/siderbar/Blog";
import Leaderboard from "@/assets/svg/siderbar/Leaderboard";
import Livechat from "@/assets/svg/siderbar/LiveChat";
import useDisclose from "@/helper/useDisclose";
import MobileNavigation from "@/provider/MobileNavigation";
import { useEffect, useState } from "react";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import CollapsibleDropdown from "../@core/CollapsibleDropdown/index.";
import { useRouter } from "next/router";

// Define your component here...

export default function TabNavigator() {
  const [activeTab, setActiveTab] = useState(1);
  const {
    isOpen: isMenuShow,
    toggle: toggleMenu,
    close: closeMenu,
  } = useDisclose();
  const router = useRouter();

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

  useEffect(() => {
    document.body.style.overflow = isMenuShow ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuShow]);

  return (
    <>
      <div
        className={`fixed flex-col ${
          isMenuShow ? "translate-x-0" : "-translate-x-full"
        }  bg-darkPrimary my-16 transition-all py-4 overflow-y-scroll items-start flex inset-0  z-50  w-full`}
        style={{
          height: "calc(100% - 64px - 64px + 1px)",
        }}
      >
        {MobileNavigation.map((item, idx) =>
          item.children ? (
            <div className={`cursor-pointer w-full overflow-hidden text-xl`}>
              <CollapsibleDropdown
                items={item.children}
                icon={item.icon({
                  heght: 24,
                  width: 24,
                })}
                title={item.title}
                onItemClick={(props) => {
                  // setActiveRoute(item.title);
                  closeMenu();
                  router.push(props?.href);
                }}
                // close={active !== idx}
              />
            </div>
          ) : (
            <div
              onClick={() => {
                // setActiveRoute(item.title);
                if (item.href) {
                  closeMenu();
                  router.push(item?.href);
                }
                // if (item.modal) {
                //   openModal(item.modal);
                // }
              }}
              // ${
              //   active === idx ? "bg-[#292D38]" : "bg-inherit"
              // }
              className={`gap-4 w-full text-[#80879A]  hover:bg-[#292D38] cursor-pointer px-4 py-1 flex-row items-center flex text-xl`}
            >
              {item.icon({
                heght: 24,
                width: 24,
              })}
              <span
                // ${active === idx ? "text-white" : "text-[#80879A]"}
                className={`font-bold  hover:text-white`}
              >
                {item.title}
              </span>
            </div>
          )
        )}
      </div>

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
