import { useDispatch, useStore } from "@/context";
import React from "react";
import LivechatIcon from "@/assets/svg/siderbar/LiveChat";

const data = [
  {
    name: "Player1",
    message: "Hey, anyone up for a game of Apex Legends?",
    time: "15:30",
  },
  {
    name: "Gamer23",
    message: "Sure, I'm in! Let's squad up!",
    time: "15:32",
  },
  {
    name: "ProGamerX",
    message: "Count me in too. We'll dominate the battlefield!",
    time: "15:34",
  },
  {
    name: "GamerGirl123",
    message: "I'm game. Can't wait to play!",
    time: "15:35",
  },
  {
    name: "NoobSlayer",
    message: "Just remember to cover me, guys!",
    time: "15:38",
  },
  {
    name: "RetroGamer77",
    message: "I might be a bit rusty, but I'm in!",
    time: "15:40",
  },
  {
    name: "EpicWarrior",
    message: "Let's do this, team! We got this!",
    time: "15:42",
  },
  {
    name: "GameMasterX",
    message: "Ready for some serious gaming action!",
    time: "15:45",
  },
  {
    name: "LoneWolf",
    message: "I prefer playing solo, but I'm watching your backs!",
    time: "15:47",
  },
  {
    name: "TheGamingGeek",
    message: "I've been waiting for this all day!",
    time: "15:50",
  },
  {
    name: "BattleRoyaleChamp",
    message: "Let's aim for that victory royale!",
    time: "15:52",
  },
  {
    name: "StealthNinja",
    message: "I'll be the ninja of the team, sneaking up on opponents!",
    time: "15:55",
  },
  {
    name: "QuickScopeMaster",
    message: "Sniping enemies from afar is my specialty!",
    time: "15:57",
  },
  {
    name: "CouchPotatoGamer",
    message: "I'm just here to have fun and enjoy the game!",
    time: "16:00",
  },
];

export default function LiveChat() {
  const { showLiveChat: isOpen } = useStore();

  const dispatch = useDispatch();
  const onClose = () => {
    dispatch({
      type: "HIDELIVECHAT",
    });
  };
  return (
    <div
      className={`w-72 z-50 bg-darkSecondary  text-white right-0 top-0 bottom-0 fixed  transform ${
        isOpen ? "translate-x-0" : "translate-x-72"
      } transition-transform duration-300 ease-in-out`}
      style={{
        background: "linear-gradient(180deg, #21252E 0%, #171B24 100%)",
        boxShadow: "-22px 0px 13px -8px rgba(0, 0, 0, 0.11)",
      }}
    >
      <div className="bg-[#373B46]  px-8 h-16 flex items-center justify-between">
        <div className="flex flex-row gap-3 items-center">
          <LivechatIcon size={24} />
          <div>Live chat</div>
        </div>
        <svg
          role="button"
          onClick={onClose}
          width={24}
          height={24}
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.51946e-05 12.9903C0.0207645 5.7998 5.8608 -0.0199224 13.0358 5.12595e-05C20.1769 0.0200249 26.028 5.89375 25.9999 13.0132C25.9703 20.2585 20.1177 26.0397 12.8502 25.9998C5.78906 25.9658 -0.0206542 20.0809 5.51946e-05 12.9903ZM12.9937 11.3251L11.0337 9.3625C10.5707 8.89941 10.1121 8.43114 9.64174 7.97545C9.3126 7.65587 8.91543 7.54564 8.46944 7.67954C8.26311 7.73584 8.07704 7.84969 7.93298 8.00779C7.78892 8.1659 7.6928 8.36174 7.65586 8.57244C7.56045 9.01629 7.71577 9.38618 8.03158 9.69983C9.05768 10.7227 10.0821 11.747 11.1047 12.7728C11.1742 12.8431 11.2401 12.9208 11.3266 13.0095C11.0063 13.3276 10.6994 13.6309 10.3947 13.9365C9.60475 14.7258 8.80966 15.5099 8.02789 16.3074C7.3859 16.9621 7.62331 18.0089 8.47166 18.2789C8.95611 18.4335 9.37621 18.3003 9.73419 17.9408C10.7499 16.9204 11.7676 15.9025 12.7873 14.8871C12.8561 14.8175 12.9293 14.7532 13.0092 14.6755C13.6941 15.3635 14.3583 16.0293 15.0225 16.695C15.4662 17.1389 15.9048 17.5879 16.3538 18.0266C16.6837 18.3455 17.0808 18.4564 17.5268 18.3225C17.7332 18.2662 17.9192 18.1524 18.0633 17.9943C18.2073 17.8362 18.3035 17.6403 18.3404 17.4296C18.438 16.9739 18.2664 16.6018 17.9469 16.2808C16.9267 15.2648 15.9088 14.2472 14.893 13.2278C14.8228 13.1582 14.7577 13.0835 14.6815 13.0007C14.7636 12.9141 14.8294 12.8401 14.9034 12.7699C15.9206 11.7514 16.9383 10.7335 17.9565 9.71611C18.2716 9.40245 18.4351 9.03553 18.3456 8.59093C18.3112 8.37952 18.2172 8.18231 18.0746 8.02245C17.9321 7.86259 17.7469 7.74671 17.5409 7.68842C17.0742 7.54046 16.6659 7.66474 16.3242 8.00504C15.2937 9.03035 14.2639 10.0608 13.2348 11.0965C13.1653 11.1653 13.0913 11.2334 12.9937 11.3251Z"
            fill="#8D93A9"
          />
        </svg>
      </div>
      {/* <div className="h-full w-full flex-col flex   justify-center items-center">
        <div className="text-white text-2xl mt-4 font-bold">
          No Chat available
        </div>
        <div className="text-[#7C8497]">There are no new chat</div>
      </div> */}
      <div className="h-full flex gap-2 flex-col w-full overflow-auto">
        {data.map((item) => (
          <div className="message">
            <div className="flex gap-3 flex-row items-center">
              <div className="h-8 w-8 bg-[#3D4554] rounded-full" />
              <div>
                <div className="text-[#818EA9]">
                  {item.name}{" "}
                  <span className="text-[#535966]">{item.time}</span>
                </div>
                <div className="text-light text-white py-2 px-3 rounded-lg w-fit bg-[#3D4554]">
                  {item.message}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
