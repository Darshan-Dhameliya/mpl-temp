import { Transition } from "@headlessui/react";
import React, { Fragment, useEffect } from "react";

export default function Modal({ isOpen, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <div
        className="fixed z-50 inset-0 flex justify-center items-center "
        style={{
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-95"
          leaveTo="opacity-0 scale-95"
        >
          {children}
        </Transition.Child>
      </div>
    </Transition>
  );
}
