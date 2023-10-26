import CloseIcon from "@/assets/svg/CloseIcon";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

export default function MobileView({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <div
        className="fixed inset-0 z-50  overflow-y-auto"
        style={{
          background:
            "linear-gradient(180deg, #292D38 23.72%, #242833 118.98%)",
          boxShadow:
            "0px 4.92642px 7.74151px 0px rgba(0, 0, 0, 0.22), 0px 1.05566px 0px 0px #3D4554 inset",
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300 sm:duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300 sm:duration-500"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="flex h-full flex-col">
            <CloseIcon
              size={24}
              className="cursor-pointer fixed right-4 top-3 "
              onClick={onClose}
            />
            <div className="">
              <div className="flex items-center justify-center">
                <Image
                  src={require("@/assets/auth_girls_bg.png")}
                  className="w-3/4  object-cover"
                  alt="something went wrong"
                />
              </div>
              <div className="text-center font-bold text-2xl text-white mb-3"></div>
              <div className="w-full pb-7 px-4">
                {step === 1 && (
                  <Step1 onClose={onClose} nextStep={() => setStep(2)} />
                )}
                {step === 2 && <Step2 onClose={onClose} />}
              </div>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
}
