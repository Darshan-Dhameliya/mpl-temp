import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import styles from "./Auth.module.css";
import TextField from "../@core/TextField";
import Button from "../@core/Button";
import Image from "next/image";
import Plus from "@/assets/svg/18Plus";
import PasswordFied from "../@core/PasswordFied";
import CloseIcon from "@/assets/svg/CloseIcon";
import Link from "next/link";

export default function Login({ isOpen, onClose, openRestPass, openRegsiter }) {
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
                className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all"
                style={{
                  background:
                    "linear-gradient(180deg, #292D38 23.72%, #242833 118.98%)",
                  boxShadow: "0px 14px 22px 0px #00000038",
                  boxShadow: "0px 3px 0px 0px #3D4554 inset",
                }}
              >
                <div
                  className="flex h-full flex-row"
                  style={{
                    height: "90vh",
                  }}
                >
                  <div className={`w-1/2 h-auto auth-left flex mb-2 relative`}>
                    <Image
                      src={require("@/assets/auth_bg.svg")}
                      className="w-100 h-100 object-cover absolute -z-10 inset-0"
                    />
                    <div className="flex w-full flex-col self-end gap-3 items-center">
                      <div className="text-white text-2xl font-bold">
                        Sign In
                      </div>
                      <div className="text-[#8D93A9] text-center">
                        By accessing the site I confirm that I am
                        <br />
                        18 years or older and that I agree to
                        <br />
                        the{" "}
                        <span className="underline text-white">
                          Terms of Service
                        </span>
                      </div>
                      <div className="flex  flex-row gap-3 items-center">
                        <Plus className="h-8 w-8" />
                        <Image
                          src={require("@/assets/Ball_icon.png")}
                          className="w-14 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 pb-7 pt-4 pe-3 h-full">
                    <div className="flex flex-col gap-3 justify-between h-full">
                      <div>
                        <div className=" flex flex-row justify-between text-2xl text-white mb-8">
                          Sign In
                          <CloseIcon
                            size={24}
                            className="cursor-pointer"
                            onClick={onClose}
                          />
                        </div>
                        <div className="flex flex-col gap-3 ">
                          <TextField placeholder="Email / Phone Number" />
                          <PasswordFied
                            className=" text-[#626778]"
                            placeholder="Password"
                            type="Password"
                            style={{
                              background: "#212530",
                            }}
                          />
                          <span
                            role="button"
                            className="self-end text-white"
                            onClick={openRestPass}
                          >
                            Forgot your password?
                          </span>
                          <Button className="mt-2" variant="primary">
                            Sign In
                          </Button>
                          <span className="text-[#626778] text-md">
                            New to Casino?{" "}
                            <span
                              role="button"
                              className="text-[#2C8CF2] cursor-pointer"
                              onClick={openRegsiter}
                            >
                              Create Account
                            </span>
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row items-center justify-center space-x-2">
                          <div className="w-24 h-px bg-[#626778] " />
                          <div className="text-sm text-[#626778] font-bold">
                            Log in directly with
                          </div>
                          <div className="w-24 h-px bg-[#626778] " />
                        </div>
                        <div className="justify-center items-center flex mt-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="106"
                            height="46"
                            viewBox="0 0 106 46"
                            fill="none"
                          >
                            <path
                              d="M26.4702 0.817957L26.4707 0.818043C30.7125 1.53937 34.454 3.31431 37.6549 6.17773C41.5045 9.63013 43.9074 13.8984 44.815 18.9977C44.9131 19.5534 44.9833 20.107 45.0552 20.6733C45.0876 20.9289 45.1203 21.1871 45.1561 21.4492V24.1961C45.1262 24.3085 45.1029 24.4225 45.0864 24.5377L45.0839 24.555L45.0826 24.5724C44.8203 28.0186 43.833 31.2375 42.0389 34.1753L42.0388 34.1755C38.4909 39.9896 33.3818 43.5525 26.676 44.8155L26.6759 44.8155C26.1549 44.9138 25.6436 44.9768 25.1136 45.0422C24.8271 45.0775 24.5351 45.1135 24.2332 45.1561H21.4606C21.4408 45.1522 21.4201 45.148 21.3985 45.1437C21.2939 45.1226 21.1713 45.098 21.0567 45.0809L21.0554 45.0807C20.7214 45.032 20.398 44.9917 20.0811 44.9523C19.4489 44.8736 18.8427 44.7981 18.2306 44.6649L18.2302 44.6648C12.8023 43.4885 8.38759 40.687 5.04822 36.2678C1.36965 31.3924 -0.0575329 25.8734 0.739915 19.8225L0.739926 19.8224C1.38135 14.9495 3.47478 10.7498 6.92149 7.24339L6.92172 7.24316C10.2664 3.83621 14.2903 1.70365 18.9979 0.874618L18.9979 0.874634L19.0019 0.873898C19.5401 0.774826 20.073 0.706189 20.6218 0.635515C20.8921 0.600697 21.1663 0.565385 21.4469 0.525696H24.2364C24.485 0.557766 24.7286 0.586423 24.9691 0.614718C25.4771 0.674493 25.9715 0.732652 26.4702 0.817957ZM20.0468 45.478C20.3582 45.5169 20.6695 45.5557 20.9795 45.6009L4.6288 36.5847C8.04482 41.1053 12.5693 43.9759 18.1189 45.1786C18.7536 45.3167 19.4003 45.3974 20.0468 45.478Z"
                              fill="#262A36"
                              stroke="#515564"
                              stroke-width="1.05139"
                            />
                            <path
                              d="M20.1715 24.2805H18.6518C18.2323 24.2805 17.8175 24.2876 17.3944 24.2805C16.9557 24.2698 16.8127 24.1389 16.8091 23.7047C16.798 22.5674 16.798 21.4297 16.8091 20.2916C16.8091 19.861 16.9676 19.7254 17.4051 19.723C18.2168 19.723 19.0285 19.723 19.839 19.723H20.1763C20.1763 19.604 20.1763 19.4946 20.1763 19.3887C20.1953 18.3525 20.1572 17.3116 20.2454 16.2802C20.4707 13.6547 22.4791 11.7798 25.1191 11.6942C26.1919 11.6597 27.2646 11.6787 28.3468 11.6823C28.7247 11.6823 28.8784 11.8369 28.8808 12.2164C28.8856 13.2807 28.8856 14.3455 28.8808 15.4106C28.8808 15.8186 28.7354 15.9661 28.3147 15.9757C27.5769 15.9935 26.8379 15.9935 26.1001 16.0054C25.2717 16.0173 24.9237 16.3409 24.9082 17.157C24.8927 17.973 24.9082 18.8082 24.9082 19.6659H25.2276C26.1668 19.6659 27.1061 19.6659 28.0453 19.6659C28.6412 19.6659 28.7759 19.8039 28.7771 20.3797C28.7771 21.4622 28.7771 22.5452 28.7771 23.6285C28.7771 24.1127 28.6484 24.2436 28.1597 24.2448C27.0929 24.2448 26.0262 24.2448 24.9094 24.2448V33.1432C24.9094 33.9284 24.8259 34.0105 24.0262 34.0105C22.9781 34.0105 21.9296 34.0105 20.8807 34.0105C20.3193 34.0105 20.1834 33.8748 20.1834 33.3205C20.1834 30.4257 20.1834 27.5309 20.1834 24.6362L20.1715 24.2805Z"
                              fill="white"
                            />
                            <path
                              d="M60.3013 19.8569L60.3008 19.8601C60.2472 20.224 60.2064 20.5838 60.1644 20.9537C60.1461 21.1151 60.1276 21.2784 60.1077 21.4448V24.233C60.1422 24.4881 60.1736 24.7387 60.2047 24.9863C60.275 25.5469 60.3434 26.0922 60.441 26.6412L60.3013 19.8569ZM60.3013 19.8569C60.9414 15.3119 62.7642 11.318 65.8412 7.92263L65.8413 7.92257M60.3013 19.8569L65.8413 7.92257M65.8413 7.92257C69.2922 4.11329 73.5484 1.74201 78.6214 0.862976C79.1229 0.776101 79.6126 0.713122 80.1151 0.648511C80.4148 0.609961 80.7191 0.57083 81.0331 0.525696H83.7799C83.893 0.555065 84.0076 0.577694 84.1234 0.593456L84.1391 0.595593L84.1549 0.596782C87.5109 0.8493 90.6554 1.78595 93.5367 3.49854M65.8413 7.92257L105.19 24.6123M105.19 24.6123C105.207 24.4957 105.232 24.3805 105.264 24.2673V21.4122C105.23 21.1637 105.2 20.9149 105.169 20.666C105.096 20.0774 105.023 19.4885 104.913 18.9032C103.604 11.9451 99.8796 6.65955 93.8053 3.04664L93.5366 3.49846C93.5366 3.49849 93.5367 3.49852 93.5367 3.49854M105.19 24.6123C104.889 28.5285 103.68 32.145 101.488 35.3987L105.19 24.6123ZM93.5367 3.49854C99.4823 7.03497 103.116 12.1919 104.396 19.0004L104.396 19.0006C104.503 19.5689 104.573 20.1313 104.645 20.7123C104.675 20.9535 104.705 21.198 104.738 21.4474V24.1971C104.709 24.3091 104.686 24.4227 104.67 24.5373L104.667 24.5546L104.666 24.572C104.372 28.4021 103.191 31.9304 101.052 35.1049L101.052 35.1051C97.4909 40.3948 92.5808 43.6444 86.3052 44.808L86.3041 44.8083C85.7567 44.9109 85.2167 44.9779 84.6584 45.0472C84.3825 45.0814 84.1021 45.1162 83.8141 45.1561H81.0657C80.9548 45.1273 80.8423 45.1045 80.7289 45.0879L80.7118 45.0854L80.6946 45.084C76.2441 44.7292 72.2487 43.2075 68.7461 40.4543C64.2306 36.9012 61.4496 32.3041 60.441 26.6413L93.5367 3.49854Z"
                              fill="#262A36"
                              stroke="#484C5A"
                              stroke-width="1.05139"
                            />
                            <path
                              d="M81.7803 11.8887H82.9771C83.0615 11.9006 83.1448 11.9137 83.2293 11.9244C83.5754 11.9648 83.924 11.991 84.2678 12.0433C85.6908 12.2808 87.0512 12.8031 88.2674 13.5791C88.5481 13.7576 88.8158 13.9562 89.1001 14.1513L86.559 17.4502C85.3303 16.5086 83.8163 16.0158 82.2687 16.0536C80.7211 16.0915 79.233 16.6578 78.0518 17.6584C76.8705 18.659 76.0672 20.0336 75.7753 21.5539C75.4834 23.0742 75.7205 24.6486 76.4472 26.0155C77.1355 27.3197 78.2317 28.3627 79.5685 28.9855C80.9052 29.6082 82.409 29.7763 83.8503 29.4643C86.5674 28.898 88.3816 26.7091 88.8384 24.9246H82.4346V20.7502H93.0949C93.1877 20.7502 93.2805 20.7502 93.3732 20.7431V23.4792C93.3602 23.5542 93.3447 23.6303 93.3328 23.7065C93.265 24.1823 93.2257 24.6582 93.1246 25.1197C92.5524 27.7524 91.2022 29.908 89.0608 31.5259C86.3961 33.5483 83.3946 34.2145 80.1219 33.5316C77.5048 32.9856 75.3729 31.6128 73.7443 29.4952C71.9861 27.2087 71.2533 24.6046 71.5292 21.7388C71.7357 19.4635 72.6725 17.316 74.2 15.617C75.834 13.7301 78.0736 12.4704 80.5348 12.054C80.9464 11.985 81.3651 11.9446 81.7803 11.8887Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
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
