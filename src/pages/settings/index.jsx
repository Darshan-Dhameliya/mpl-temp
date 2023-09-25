import DropDownIcon from "@/assets/svg/DropDownIcon";
import Logout from "@/assets/svg/Logout";
import Settings from "@/assets/svg/siderbar/Setting";
import General from "@/components/settings/general";
import Language from "@/components/settings/language";
import Password from "@/components/settings/password";
import PrivacyPolicy from "@/components/settings/privacyPolicy";
import Security from "@/components/settings/security";
import SessionHistory from "@/components/settings/SessionHistory";
import TermsAndCondition from "@/components/settings/termsAndCondition";
import useDisclose from "@/helper/useDisclose";
import React, { useState } from "react";

export default function Setting() {
  const [activeId, setactiveId] = useState(1);
  const {
    isOpen: isMenuOpen,
    toggle: toggleMenu,
    close: closeMenu,
  } = useDisclose(false);
  const chnageActiveid = (num) => () => setactiveId(num);
  const chnageActiveidAndCloseDropdown = (num) => () => {
    setactiveId(num);
    closeMenu();
  };

  return (
    <div className=" p-4">
      <div className="flex flex-row text-white font-bold gap-2 text-2xl ">
        <Settings />
        Settings
      </div>
      <div class="grid lg:grid-cols-4 text-[#80879A] gap-3">
        <div
          className="rounded-lg h-fit col-span-1 p-4 flex flex-col gap-3"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          <div
            className={`${
              activeId === 1 || activeId === 11 || activeId === 12
                ? "text-[#80879A] bg-[#2F3543]"
                : ""
            } ${
              activeId === 1 && "text-white"
            } select-none cursor-pointer  overflow-hidden rounded-lg`}
          >
            <div
              className="flex py-2 px-3 justify-between"
              onClick={chnageActiveid(1)}
            >
              General
              <DropDownIcon
                size={24}
                className={`transition-transform ${
                  isMenuOpen ? "rotate-90" : "rotate-0"
                }`}
                onClick={toggleMenu}
              />
            </div>
            {isMenuOpen && (
              <>
                <div className="border border-[#4A5161] mb-2 mx-2" />
                <div
                  onClick={chnageActiveid(11)}
                  className={`${
                    activeId === 11 ? "bg-[#4A5161] text-white" : ""
                  }  p-2 px-3`}
                >
                  Change Password
                </div>
                <div
                  className={`${
                    activeId === 12 ? "bg-[#4A5161] text-white" : ""
                  }  p-2 px-3`}
                  onClick={chnageActiveid(12)}
                >
                  Language
                </div>
              </>
            )}
          </div>
          {[
            { id: 2, name: "Security" },
            { id: 3, name: "Privacy Policy" },
            { id: 4, name: "Terms and Conditions" },
            { id: 5, name: "Session History" },
          ].map((item) => (
            <div
              role="button"
              className={`${
                activeId === item.id ? " text-white  bg-[#2F3543]" : ""
              }  py-2 px-3 rounded-lg hover:text-white`}
              onClick={chnageActiveidAndCloseDropdown(item.id)}
            >
              {item.name}
            </div>
          ))}
          <div
            className="text-white font-bold flex flex-row  items-center gap-3 cursor-pointer py-2 px-3 rounded-lg"
            style={{
              background:
                "linear-gradient(90deg, #363E50 0.17%, #353C4B 99.83%)",
              boxShadow: "0px 1px 0px 0px #303647 inset",
            }}
          >
            <Logout width={16} /> Log out
          </div>
        </div>
        <div
          class="col-span-3 h-fit rounded-lg p-8 text-[#80879A]"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          {activeId == 1 && <General />}
          {activeId == 11 && <Password />}
          {activeId == 12 && <Language />}
          {activeId == 2 && <Security />}
          {activeId == 3 && <PrivacyPolicy />}
          {activeId == 4 && <TermsAndCondition />}
          {activeId == 5 && <SessionHistory />}
        </div>
        {/* <div class="row-start-1 row-end-4 bg-red-700">03</div> */}
      </div>
    </div>
  );
}
