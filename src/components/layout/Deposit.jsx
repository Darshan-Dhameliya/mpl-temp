import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DepositIcon from "@/assets/svg/siderbar/Deposit";
import CloseIcon from "@/assets/svg/CloseIcon";
import { useDispatch, useSelector } from "react-redux";

export default function Deposit() {
  const isOpen = useSelector((state) => state.app.showDeposit);

  const dispatch = useDispatch();
  const onClose = () => {
    dispatch({
      type: "HIDEDEPOSIT",
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-95"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-4xl p-4 transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all"
                style={{
                  background:
                    "linear-gradient(180deg, #292D38 23.72%, #242833 118.98%)",
                }}
              >
                <div className="flex  text-white justify-between">
                  <div className="flex gap-3">
                    <DepositIcon height={24} width={24} />
                    Deposit
                  </div>
                  <CloseIcon
                    size={24}
                    className="cursor-pointer self-end"
                    onClick={onClose}
                  />
                </div>
                <div className="text-white h-64 flex justify-center items-center">
                  Deposit
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
