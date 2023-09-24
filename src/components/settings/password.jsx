import React from "react";
import PasswordFied from "../@core/PasswordFied";
import Button from "../@core/Button";

export default function Password() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg text-white font-bold">Change Password</span>
      <div className="text-[#51586A]">
        Old Password
        <PasswordFied placeholder="Old Password" className="mt-1" />
      </div>
      <div className="text-[#51586A]">
        New Password
        <PasswordFied placeholder="New Password" className="mt-1" />
      </div>
      <div className="text-[#51586A] relative">
        Confirm Password
        <PasswordFied placeholder="Confirm Password" className="mt-1" />
      </div>
      {/* <PasswordEye size={48} isOpen /> */}
      <Button variant="secondary" className="w-fit self-end p-4">
        Save Changes
      </Button>
    </div>
  );
}
