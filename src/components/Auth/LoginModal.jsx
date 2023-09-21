import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import styles from "./Auth.module.css";

export default function MyModal({ isOpen, onClose }) {
  console.log(isOpen);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all"
                style={{
                  background:
                    "linear-gradient(180deg, #292D38 23.72%, #242833 118.98%)",
                  boxShadow: "0px 14px 22px 0px #00000038",
                  boxShadow: "0px 3px 0px 0px #3D4554 inset",
                }}
              >
                <div className="flex h-64  flex-row">
                  <div className={`w-1/2  h-full ${styles.authLeftBg}`}></div>
                  <div className="w-1/2">
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
