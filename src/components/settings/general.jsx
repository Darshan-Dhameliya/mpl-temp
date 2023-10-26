import React from "react";
import Switch from "../@core/switch";
import Divider from "../@core/Divider";
import { useSelector } from "react-redux";

export default function General() {
  const userSettings = useSelector((state) => state.user);

  return (
    <div className="flex flex-col jus gap-4 py-2">
      <div>
        <div className="text-lg px-4 flex justify-between items-center ">
          <span>Sound</span>
          <Switch isChecked={userSettings?.sound} />
        </div>
        <Divider className="mt-2 mb-0" />
      </div>
      <div>
        <div className="text-lg px-4 flex justify-between items-center ">
          <span>Music</span>
          <Switch isChecked={userSettings?.music} />
        </div>
        <Divider className="mt-2 mb-0" />
      </div>
      <div className="text-lg px-4 flex justify-between items-center ">
        <span>Vibration</span>
        <Switch isChecked={userSettings?.vibration} />
      </div>
      <div className="bg-[#303644] rounded-lg py-3 px-1">
        <div className="text-lg px-4 flex justify-between items-center ">
          <div>
            <div className="text-white">Notification</div>
            <div className="text-sm">Your interaction will be visible here</div>
          </div>
          <Switch isChecked={userSettings?.notificationMode} />
        </div>
      </div>
    </div>
  );
}
