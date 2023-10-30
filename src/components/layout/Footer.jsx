import Logo from "@/assets/logo.png";
import Image from "next/image";
import React from "react";
import FlagImg from "../../assets/flag.png";
import Twitter from "@/assets/svg/social/Twitter";
import Facebook from "@/assets/svg/social/Facebook";
import Whatsapp from "@/assets/svg/social/Whatsapp";
import Instagram from "@/assets/svg/social/Instagram";
import Youtube from "@/assets/svg/social/Youtube";
import Plus from "@/assets/svg/18Plus";
import { useRouter } from "next/router";
const footerLinks = {
  games: [
    {
      label: "Slots",
      href: "",
    },
    {
      label: "Table Games",
      href: "",
    },
    {
      label: "Live Games",
      href: "",
    },
    {
      label: "Roulette",
      href: "",
    },
    {
      label: "Jackpot",
      href: "",
    },
    {
      label: "Bonus Buy",
      href: "",
    },
  ],
  casino: [
    {
      label: "About Us",
      href: "",
    },
    {
      label: "Promotions",
      href: "",
    },
    {
      label: "Tournaments",
      href: "",
    },
    {
      label: "Affiliate Program",
      href: "",
    },
    {
      label: "Loyalty Program",
      href: "",
    },
    {
      label: "Blog",
      href: "",
    },
  ],
  legal: [
    {
      label: "Privacy Policy",
      href: "",
    },
    {
      label: "Terms & Conditions",
      href: "",
    },
    {
      label: "Bonus Terms",
      href: "",
    },
    {
      label: "Responsible Gambling",
      href: "",
    },
  ],
  support: [
    {
      label: "Support",
      href: "",
    },
  ],
};

export default function Footer() {
  const router = useRouter();
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #212530 0%, #212530 100%)",
        boxShadow: "0px 3px 0px 0px #30343F inset",
      }}
      className="lap:p-16 mobtab:px-4  lap:pt-8"
    >
      <div className="flex flex-col lap:flex-row justify-between">
        <div className="lap:w-52">
          <div className="flex flex-row justify-center gap-2  items-center">
            <Image
              src={Logo}
              alt="something went wrong"
              onClick={() => router.push("/")}
              className="w-48 h-full cursor-pointer object-cover"
            />
            <Image
              src={FlagImg}
              alt="Your Image"
              className="rounded-full w-8 h-8"
            />
          </div>
          <span className="text-[#4C525E]">
            <span className="text-white">Casino</span> our service will allow
            you to try your luck in gambling, as well as make your predictions
            in sports events. Play and win!
          </span>
          <div className="mt-6">
            <span className="text-xl text-white font-bold">Follow Us</span>
            <div className="flex flex-row gap-2">
              <Twitter />
              <Facebook />
              <Whatsapp />
              <Instagram />
              <Youtube />
            </div>
          </div>
        </div>
        <div className="grid  lap:grid-cols-4   mobtab:gap-4 mobtab:grid-cols-2 ">
          <div className="games">
            <span className="h-2 text-white   font-bold text-lg">Games</span>
            <div className="flex flex-col gap-2">
              {footerLinks.games.map((item) => (
                <span
                  key={item.label}
                  className=" text-[#4C525E] hover:text-gray-300 cursor-pointer"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="Casino">
            <span className="h-2 text-white font-bold text-lg">Casino</span>
            <div className="flex flex-col gap-2">
              {footerLinks.casino.map((item) => (
                <span
                  key={item.label}
                  className="text-[#4C525E] hover:text-gray-300 cursor-pointer"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="Legal">
            <span className="h-2 text-white font-bold text-lg">Legal</span>
            <div className="flex flex-col gap-2">
              {footerLinks.legal.map((item) => (
                <span
                  key={item.label}
                  className="text-[#4C525E] hover:text-gray-300 cursor-pointer"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="Support">
            <span className="h-2 text-white font-bold text-lg">Support</span>
            <div className="flex flex-col gap-2">
              {footerLinks.support.map((item) => (
                <span
                  key={item.label}
                  className="text-[#4C525E] hover:text-gray-300 cursor-pointer"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#282C38]" />
      <div className="flex mobtab:flex-col mobtab:gap-5 flex-row justify-between items-center mt-8">
        <div className="text-[#636C7D]">© 2023 Casino All rights reserved.</div>
        <div>
          <div className="text-center text-white">Accepted currencies</div>
          <svg
            width="300"
            height="29"
            viewBox="0 0 300 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2"
          >
            <path
              d="M27.5815 17.3891C25.7114 24.8901 18.1141 29.4551 10.6122 27.5846C3.1134 25.7145 -1.4516 18.1168 0.419379 10.6162C2.28861 3.11434 9.88587 -1.45111 17.3856 0.419001C24.887 2.28911 29.4516 9.88768 27.5815 17.3891Z"
              fill="#F7931A"
            />
            <path
              d="M18.3493 9.18837C17.6591 7.43551 15.9298 7.27741 13.916 7.66862L13.199 5.16833L11.6771 5.60489L12.3752 8.03927C11.9752 8.15404 11.5685 8.27922 11.1645 8.40383L10.462 5.95325L8.94091 6.38937L9.65709 8.88912C9.32952 8.99033 9.00769 9.08924 8.69223 9.17992L8.68981 9.17222L6.59051 9.77341L7.057 11.3988C7.057 11.3988 8.17473 11.0551 8.16198 11.0811C8.77849 10.9045 9.08175 11.2049 9.22866 11.497L10.0456 14.3453C10.0882 14.3333 10.1442 14.3192 10.2095 14.3098C10.1588 14.3244 10.1044 14.3396 10.0488 14.3561L11.1926 18.3465C11.2211 18.5483 11.1958 18.8903 10.7653 19.0145C10.7897 19.0262 9.65892 19.3315 9.65892 19.3315L9.87771 21.2357L11.8582 20.6677C12.2269 20.5625 12.5914 20.4648 12.948 20.3649L13.6738 22.8935L15.1941 22.4578L14.4767 19.9558C14.8966 19.8447 15.3015 19.7322 15.6957 19.6188L16.4092 22.1095L17.9311 21.6729L17.2077 19.1485C19.7243 18.268 21.3303 17.1099 20.8637 14.6434C20.4884 12.6572 19.3308 12.0549 17.7783 12.1226C18.5319 11.4202 18.8565 10.4704 18.3493 9.18837ZM17.7705 15.206C18.3132 17.0955 15.0158 17.8084 13.9847 18.1052L13.0243 14.7546C14.0561 14.459 17.2055 13.2349 17.7705 15.206ZM15.7072 10.6819C16.1998 12.4014 13.4436 12.9746 12.5845 13.221L11.7133 10.1822C12.5724 9.93581 15.1928 8.88873 15.7072 10.6819Z"
              fill="white"
            />
            <path
              d="M48 29C55.732 29 62 22.732 62 15C62 7.26801 55.732 1 48 1C40.268 1 34 7.26801 34 15C34 22.732 40.268 29 48 29Z"
              fill="#0AC18E"
            />
            <path
              d="M52.3666 10.2989C51.663 8.70343 50.0462 8.36202 48.0667 8.69248L47.4309 6.22656L45.9312 6.61667L46.5566 9.07548C46.1621 9.17505 45.7572 9.26041 45.3556 9.37421L44.7303 6.92963L43.2328 7.31426L43.8691 9.78018C43.5457 9.87265 40.8418 10.5653 40.8418 10.5653L41.2538 12.1711C41.2538 12.1711 42.3552 11.862 42.3448 11.8872C42.9559 11.7274 43.2437 12.0327 43.3788 12.3205L45.1297 19.0792C45.151 19.2746 45.1154 19.6083 44.6963 19.7221C44.721 19.7363 43.6054 20.0028 43.6054 20.0028L43.7695 21.8756C43.7695 21.8756 46.4504 21.1895 46.8006 21.1009L47.444 23.5953L48.9432 23.2079L48.3003 20.696C48.7125 20.5997 49.1137 20.5001 49.504 20.3973L50.1436 22.8955L51.6427 22.5081L50.9998 20.017C53.3093 19.4557 54.9392 17.9986 54.6065 15.7707C54.3931 14.4275 52.9257 13.3261 51.7067 13.2019C52.4563 12.5372 52.8366 11.5671 52.3715 10.2989H52.3666ZM51.6449 16.1794C51.9436 18.386 48.877 18.6563 47.8642 18.9227L46.9828 15.6219C47.9994 15.3549 51.1405 14.236 51.6449 16.1794ZM49.7983 11.6847C50.1146 13.6462 47.4922 13.8733 46.6463 14.0921L45.8426 11.0949C46.6917 10.8843 49.1544 9.86882 49.7983 11.6847Z"
              fill="white"
            />
            <path
              d="M82 29C89.732 29 96 22.732 96 15C96 7.26801 89.732 1 82 1C74.268 1 68 7.26801 68 15C68 22.732 74.268 29 82 29Z"
              fill="#627EEA"
            />
            <path
              d="M82.4355 4.5V12.2613L88.9954 15.1925L82.4355 4.5Z"
              fill="white"
              fill-opacity="0.602"
            />
            <path
              d="M82.4357 4.5L75.875 15.1925L82.4357 12.2613V4.5Z"
              fill="white"
            />
            <path
              d="M82.4355 20.2221V25.4957L88.9998 16.4141L82.4355 20.2221Z"
              fill="white"
              fill-opacity="0.602"
            />
            <path
              d="M82.4357 25.4957V20.2212L75.875 16.4141L82.4357 25.4957Z"
              fill="white"
            />
            <path
              d="M82.4355 19.002L88.9954 15.1932L82.4355 12.2637V19.002Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M75.875 15.1932L82.4357 19.002V12.2637L75.875 15.1932Z"
              fill="white"
              fill-opacity="0.602"
            />
            <path
              d="M116 26.4869C122.895 26.4869 128.485 20.8973 128.485 14.0022C128.485 7.10714 122.895 1.51758 116 1.51758C109.105 1.51758 103.516 7.10714 103.516 14.0022C103.516 20.8973 109.105 26.4869 116 26.4869Z"
              fill="white"
            />
            <path
              d="M116 0C108.268 0 102 6.27148 102 14.0019C102 21.7323 108.268 28.0016 116 28.0016C123.731 28.0016 130 21.734 130 14.0019C130.022 6.29238 123.791 0.0247558 116.082 0H116ZM116.237 14.4745L114.78 19.3893H122.576C122.68 19.3856 122.782 19.4234 122.858 19.4945C122.934 19.5656 122.979 19.6641 122.983 19.7684V19.8971L122.305 22.239C122.275 22.3496 122.209 22.4468 122.116 22.5145C122.024 22.5823 121.911 22.6167 121.797 22.612H109.865L111.864 15.7986L109.627 16.4764L110.136 14.9173L112.373 14.239L115.187 4.67995C115.218 4.56995 115.284 4.47345 115.376 4.40585C115.469 4.33825 115.581 4.30344 115.695 4.30696H118.712C118.816 4.3034 118.917 4.34139 118.994 4.41257C119.07 4.48376 119.115 4.58231 119.118 4.68655V4.81583L116.746 12.8835L118.983 12.2052L118.509 13.8325L116.237 14.4745Z"
              fill="#345D9D"
            />
            <circle cx="150" cy="15.0453" r="10.2816" fill="#D9D9D9" />
            <path
              d="M150.336 10.2266H148.336V14.1702H151.483V15.8214H148.336V19.7648H150.434C150.973 19.7648 154.86 19.8257 154.854 15.1767C154.848 10.5277 151.084 10.2266 150.336 10.2266Z"
              fill="#C2A633"
            />
            <path
              d="M150 1C142.268 1 136 7.26794 136 15C136 22.7321 142.268 29 150 29C157.732 29 164 22.7321 164 15C164 7.26794 157.732 1 150 1ZM150.55 22.5614H145.48V15.821H143.693V14.1698H145.48V7.42894H149.831C150.861 7.42894 157.679 7.21516 157.679 15.1217C157.679 23.1589 150.55 22.5614 150.55 22.5614H150.55Z"
              fill="#C2A633"
            />
            <path
              d="M184 1C191.732 1 198 7.26836 198 15C198 22.7316 191.731 29 184 29C176.269 29 170 22.7333 170 15C170 7.26668 176.268 1 184 1Z"
              fill="#53AE94"
            />
            <path
              d="M185.728 13.1348V11.0521H190.491V7.87891H177.522V11.0521H182.286V13.1331C178.415 13.3109 175.504 14.0775 175.504 14.9959C175.504 15.9143 178.416 16.681 182.286 16.8599V23.5309H185.73V16.8593C189.594 16.681 192.498 15.9149 192.498 14.9973C192.498 14.0798 189.594 13.3137 185.73 13.1353M185.73 16.2943V16.2926C185.632 16.2988 185.133 16.3287 184.022 16.3287C183.133 16.3287 182.508 16.3035 182.287 16.2921V16.2949C178.867 16.1434 176.315 15.5478 176.315 14.8352C176.315 14.1226 178.868 13.5279 182.287 13.3761V15.7015C182.511 15.7169 183.152 15.7547 184.036 15.7547C185.098 15.7547 185.632 15.7105 185.73 15.7015V13.3761C189.143 13.5282 191.69 14.1243 191.69 14.8344C191.69 15.5445 189.142 16.1409 185.73 16.2929"
              fill="white"
            />
            <path
              d="M218 29C225.735 29 232 22.7305 232 15C232 7.26949 225.735 1 218 1C210.265 1 204 7.26949 204 15C204 22.7305 210.27 29 218 29Z"
              fill="#FF060A"
            />
            <path
              d="M226.254 12.547C225.448 11.8302 224.328 10.7382 223.42 9.96536L223.364 9.93176C223.275 9.86456 223.174 9.80856 223.068 9.76936C220.872 9.37736 210.658 7.54616 210.462 7.56856C210.406 7.57416 210.35 7.59656 210.305 7.62456L210.255 7.66376C210.193 7.72536 210.143 7.79816 210.115 7.88216L210.104 7.91576V8.10056V8.12856C211.252 11.1974 215.793 21.2438 216.689 23.607C216.745 23.7694 216.846 24.0718 217.036 24.0886H217.081C217.182 24.0886 217.619 23.5342 217.619 23.5342C217.619 23.5342 225.42 14.4734 226.209 13.5102C226.31 13.3926 226.4 13.2638 226.478 13.1294C226.5 13.023 226.489 12.9166 226.45 12.8158C226.411 12.715 226.338 12.6198 226.254 12.547ZM219.612 13.6054L222.939 10.9622L224.893 12.687L219.612 13.6054ZM218.319 13.4318L212.59 8.92936L221.864 10.5702L218.319 13.4318ZM218.834 14.6078L224.697 13.7006L217.994 21.4454L218.834 14.6078ZM211.812 9.38296L217.843 14.283L216.969 21.451L211.812 9.38296Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M252 1C259.733 1 266 7.26747 266 15C266 22.7325 259.733 29 252 29C244.267 29 238 22.7325 238 15C238 7.26747 244.267 1 252 1Z"
              fill="#F0B90B"
            />
            <path
              d="M245.695 15.0001L245.705 18.702L248.851 20.553V22.7203L243.864 19.7958V13.9176L245.695 15.0001ZM245.695 11.2982V13.4554L243.863 12.3717V10.2145L245.695 9.13086L247.536 10.2145L245.695 11.2982ZM250.164 10.2145L251.996 9.13086L253.837 10.2145L251.996 11.2982L250.164 10.2145Z"
              fill="white"
            />
            <path
              d="M247.018 17.9347V15.7674L248.849 16.8511V19.0083L247.018 17.9347ZM250.163 21.3293L251.995 22.4129L253.836 21.3293V23.4865L251.995 24.5701L250.163 23.4865V21.3293ZM256.463 10.2145L258.295 9.13086L260.136 10.2145V12.3717L258.295 13.4554V11.2982L256.463 10.2145ZM258.295 18.702L258.305 15.0001L260.137 13.9164V19.7946L255.151 22.7192V20.5519L258.295 18.702Z"
              fill="white"
            />
            <path
              d="M256.982 17.9349L255.15 19.0084V16.8512L256.982 15.7676V17.9349Z"
              fill="white"
            />
            <path
              d="M256.981 12.0651L256.991 14.2324L253.837 16.0834V19.7943L252.005 20.8678L250.173 19.7943V16.0834L247.019 14.2324V12.0651L248.858 10.9815L251.994 12.8414L255.148 10.9815L256.989 12.0651H256.981ZM247.018 8.3643L251.995 5.42969L256.981 8.3643L255.149 9.44796L251.995 7.58802L248.849 9.44796L247.018 8.3643Z"
              fill="white"
            />
            <path
              d="M286 29C293.732 29 300 22.732 300 15C300 7.26801 293.732 1 286 1C278.268 1 272 7.26801 272 15C272 22.732 278.268 29 286 29Z"
              fill="black"
            />
            <path
              d="M292.388 7.1582H295L289.563 12.7963C287.594 14.838 284.402 14.838 282.437 12.7963L276.998 7.1582H279.61L283.74 11.4411C284.989 12.7324 287.008 12.7324 288.253 11.4411L292.388 7.1582ZM279.578 22.8427H276.965L282.437 17.1665C284.406 15.1248 287.598 15.1248 289.567 17.1665L295.039 22.8427H292.426L288.262 18.5217C287.013 17.2304 284.994 17.2304 283.749 18.5217L279.578 22.8427Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-row justify-center gap-3 items-center">
          <Plus />
          <Image alt="" src={require("@/assets/Ball_icon.png")} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <circle cx="40" cy="40" r="40" fill="#333947" />
            <path
              d="M41.4605 21C42.2502 21.1195 43.0558 21.1775 43.8276 21.3688C50.6576 23.0641 54.8778 27.3663 56.5145 34.2133C56.6275 34.7371 56.7067 35.2676 56.7515 35.8016C56.806 36.3209 56.8204 36.8444 56.8535 37.4535C56.6468 37.3216 56.5131 37.2083 56.358 37.1386C55.8756 36.921 55.3877 36.7001 54.8874 36.5226C54.6738 36.4466 54.5828 36.3679 54.5608 36.1324C54.3251 33.6111 53.4899 31.3033 52.0269 29.2364C50.353 26.8719 48.1643 25.1621 45.4574 24.1262C43.1381 23.2419 40.6271 22.9857 38.1775 23.3833C35.7279 23.781 33.4261 24.8184 31.5039 26.3913C29.1685 28.3028 27.591 30.7232 26.7779 33.6263C26.5463 34.455 26.4671 35.3203 26.3058 36.1669C26.2845 36.2774 26.2155 36.43 26.1273 36.468C25.4451 36.7629 24.7491 37.035 24 37.3395C24.0917 36.466 24.1199 35.544 24.2936 34.6463C25.4038 28.8987 28.6351 24.7981 33.9414 22.3542C35.5732 21.6063 37.3071 21.1968 39.1023 21.0622C39.2095 21.0478 39.3158 21.0271 39.4206 21H41.4605Z"
              fill="#D9DDFF"
            />
            <path
              d="M43.5178 53.9864C44.7693 53.9864 46.009 54.0334 47.2439 53.974C48.5932 53.9091 49.762 52.9257 50.0542 51.7814C49.507 51.7559 48.9268 51.818 48.3934 51.6868C46.8897 51.3174 45.9277 50.0923 45.9125 48.5295C45.8863 45.5601 45.8705 42.5907 45.9125 39.6212C45.9518 36.9971 48.6477 35.5041 50.8908 36.8355C51.9327 37.457 52.4461 38.4335 52.451 39.6337C52.4675 43.3807 52.4875 47.1291 52.4441 50.8761C52.4103 53.7634 50.0321 56.1092 47.1495 56.181C46.0331 56.2087 44.9153 56.1942 43.7983 56.1845C43.584 56.1845 43.4847 56.2535 43.3951 56.4469C42.7308 57.8805 41.2423 58.6277 39.7338 58.2997C38.2784 57.9834 37.215 56.6838 37.162 55.1576C37.1103 53.6612 38.1722 52.2897 39.6814 51.903C41.1072 51.5377 42.6929 52.2814 43.3476 53.6239C43.4089 53.7454 43.4627 53.8704 43.5178 53.9864Z"
              fill="#7776D0"
            />
            <path
              d="M34.9753 44.1103C34.9753 45.5453 34.9822 46.981 34.9753 48.416C34.9663 49.9083 34.0939 51.1817 32.81 51.6023C30.6048 52.3253 28.4685 50.8654 28.4327 48.5417C28.3872 45.5626 28.3817 42.5807 28.4327 39.6016C28.4782 36.9975 31.1603 35.5176 33.3944 36.8317C34.4784 37.4691 34.9643 38.4891 34.9732 39.7321C34.9836 41.1906 34.9753 42.6504 34.9753 44.1103Z"
              fill="#7776D0"
            />
            <path
              d="M26.2723 38.752V49.4102C25.4056 49.1187 24.7489 48.567 24.3912 47.7355C24.1917 47.2681 24.0805 46.7677 24.0632 46.2598C24.021 44.802 24.0404 43.3422 24.05 41.883C24.0604 40.3934 24.9678 39.12 26.2723 38.752Z"
              fill="#E8F3FF"
            />
            <path
              d="M54.6133 49.3933V38.7344C55.3038 38.9512 55.8363 39.3766 56.2506 39.9615C56.6397 40.5117 56.8447 41.1709 56.8362 41.8447C56.8404 43.328 56.8486 44.8141 56.8362 46.2947C56.821 47.7608 55.9088 49.0162 54.6133 49.3933Z"
              fill="#E8F3FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
