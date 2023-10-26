import Step1 from "./Step1";
import Step2 from "./Step2";
import LeftSide from "./LeftSide";
import Modal from "@/components/@core/Modal";
import { useState } from "react";
import MobileView from "./MobileView";
import CloseIcon from "@/assets/svg/CloseIcon";
import useDeviceType from "@/helper/useDeviceType";

export default function MyModal({ isOpen, onClose, openLogin }) {
  const [step, setStep] = useState(1);
  const { isMobile } = useDeviceType();

  if (isMobile) {
    return <MobileView {...{ isOpen, onClose }} />;
  }

  return (
    <Modal isOpen={isOpen}>
      <div
        className="w-full max-w-4xl  flex flex-row transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all"
        style={{
          background:
            "linear-gradient(180deg, #292D38 23.72%, #242833 118.98%)",
          boxShadow:
            "0px 14px 22px 0px #00000038,0px 3px 0px 0px #3D4554 inset",
          height: "90vh",
        }}
      >
        <div className={`w-1/2 auth-left flex mb-2 relative`}>
          <LeftSide />
        </div>
        <div className="w-1/2 my-4 me-10">
          <div className="flex flex-row justify-between text-2xl text-white ">
            {step === 1 ? "Registration an Account" : "Terms and Conditions"}
            <CloseIcon size={24} className="cursor-pointer" onClick={onClose} />
          </div>
          {step === 1 && (
            <Step1
              onClose={onClose}
              openLogin={openLogin}
              nextStep={() => setStep(2)}
            />
          )}
          {step === 2 && <Step2 onClose={onClose} />}
        </div>
      </div>
    </Modal>
  );
}
