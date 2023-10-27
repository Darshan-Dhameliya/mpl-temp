import Logout from "@/assets/svg/Logout";
import Settings from "@/assets/svg/siderbar/Setting";
import Api from "@/components/settings/api";
import General from "@/components/settings/general";
import PrivacyPolicy from "@/components/settings/privacyPolicy";
import Security from "@/components/settings/security";
import SessionHistory from "@/components/settings/SessionHistory";
import TermsAndCondition from "@/components/settings/termsAndCondition";
import SecureSection from "@/helper/SecureSection";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const data = [
  { id: 1, name: "General" },
  { id: 2, name: "Security" },
  { id: 3, name: "Api" },
  { id: 4, name: "Session History" },
  { id: 5, name: "Terms and Conditions" },
  { id: 6, name: "Privacy Policy" },
];

export default function Setting() {
  const [activeId, setactiveId] = useState(1);

  const chnageActiveidAndCloseDropdown = (num) => () => {
    setactiveId(num);
  };

  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
  };

  const { query } = useRouter();
  useEffect(() => {
    if (query?.id) {
      setactiveId(parseInt(query?.id, 10));
    }
    return () => {};
  }, [query?.id]);

  return (
    <div className=" p-4">
      <div className="flex flex-row text-white font-bold gap-2 text-2xl ">
        <Settings />
        Settings
      </div>
      <div class="grid lap:grid-cols-4 text-[#80879A] gap-3">
        <div
          className="rounded-lg mobtab:hidden h-fit col-span-1 p-4 flex flex-col gap-3"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              role="button"
              className={`${
                activeId === item.id ? " text-white  bg-[#2F3543]" : ""
              }  py-2 px-3 rounded-lg focus:outline-gray-500 focus:outline-1  hover:text-white`}
              onClick={chnageActiveidAndCloseDropdown(item.id)}
            >
              {item.name}
            </div>
          ))}
          <SecureSection>
            <div
              className="text-white font-bold flex flex-row  items-center gap-3 cursor-pointer py-2 px-3 rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, #363E50 0.17%, #353C4B 99.83%)",
                boxShadow: "0px 1px 0px 0px #303647 inset",
              }}
              role="button"
              onClick={handleSignOut}
            >
              <Logout width={16} /> Log out
            </div>
          </SecureSection>
        </div>
        <div
          class="col-span-3 h-fit rounded-lg p-8 text-[#80879A]"
          style={{
            background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
          }}
        >
          {activeId == 1 && <General />}
          {/* {activeId == 11 && <Password />}
          {activeId == 12 && <Language />} */}
          {activeId == 3 && <Api />}
          {activeId == 2 && <Security />}
          {activeId == 4 && <SessionHistory />}
          {activeId == 5 && <TermsAndCondition />}
          {activeId == 6 && <PrivacyPolicy />}
        </div>
      </div>
    </div>
  );
}
