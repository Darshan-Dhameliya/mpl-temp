import Image from "next/image";
import Button from "@/components/@core/Button";
import AllGames from "@/assets/svg/gameMenubar/AllGames";
import Dice from "@/assets/svg/gameMenubar/Dice";
import Slotes from "@/assets/svg/gameMenubar/Slotes";
import TableIcon from "@/assets/svg/gameMenubar/Table";
import LiveGames from "@/assets/svg/gameMenubar/LiveGames";
import Favorite from "@/assets/svg/gameMenubar/Favorite";
import RecentlyPlayed from "@/assets/svg/gameMenubar/RecentlyPlayed";
import Leaderboard from "@/assets/svg/siderbar/Leaderboard";
import Table from "@/components/@core/Table";
import Game from "@/components/carsoul/game";
import { useStore } from "@/context";
import SecureSection from "@/helper/SecureSection";
import TableTabBar from "@/components/@core/TbaleTabBar";
import SearchField from "@/components/@core/SearchField";
import { useState } from "react";
import GamePlayer from "@/components/GamePlayer";

// const inter = Inter({ subsets: ["latin"] });

const menubar = [
  {
    title: "All Games",
    href: "",
    icon: (props) => <AllGames {...props} />,
  },
  {
    title: "Dice",
    href: "",
    icon: (props) => <Dice {...props} />,
  },
  {
    title: "Slots",
    href: "",
    icon: (props) => <Slotes {...props} />,
  },
  {
    title: "Table",
    href: "",
    icon: (props) => <TableIcon {...props} />,
  },
  {
    title: "Live Games",
    href: "",
    icon: (props) => <LiveGames {...props} />,
  },
  {
    title: "Favorites",
    href: "",
    icon: (props) => <Favorite {...props} />,
  },
  {
    title: "Recently Played",
    href: "",
    icon: (props) => <RecentlyPlayed {...props} />,
  },
];

const imagedata = [
  {
    imgPath: require("../assets/games/1_Skull_Fiesta.png"),
  },
  {
    imgPath: require("../assets/games/2_Duck_Trap.png"),
    gameURL:
      "http://52.15.40.84/casino/launch.html?platformId=1&gameId=2&isReal=false",
  },
  {
    imgPath: require("../assets/games/3_Fishing_Fantasy.png"),
  },
  {
    imgPath: require("../assets/games/4_Auspicious_Easter.png"),
  },
  {
    imgPath: require("../assets/games/5_TOW.png"),
  },
  {
    imgPath: require("../assets/games/6_Aladdin_Emperors.png"),
  },
  {
    imgPath: require("../assets/games/7_Lucky_Jungle.png"),
  },
];

export default function Home() {
  const { isloggedin } = useStore();
  const [gamePlayURL, setgamePlayURL] = useState("");

  return (
    <div className={`h-full flex flex-col gap-8 text-white`}>
      {isloggedin === false && (
        <>
          <div className=" flex flex-col w-full relative">
            <Image
              src={require("../assets/Main_page_img.svg")}
              className="w-screen absolute inset-0 z-0"
            />
            <div className="flex flex-col gap-6  mt-16">
              <div className="text-[#858AA0] text-2xl">
                Sign Up &<span className="text-[#3DDC80]"> Get</span> Reward
              </div>
              <div className="text-white text-7xl font-bold">
                UP TO <span className="text-[#3DDC80]">$ 22,000</span>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Button className="py-3 rounded-xl" variant="primary">
                  Register Instantly
                </Button>
                or
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="36"
                  viewBox="0 0 192 58"
                  fill="none"
                >
                  <path
                    d="M22.9485 57.0092C16.0561 55.5155 10.4368 51.9503 6.19418 46.3358L22.9485 57.0092ZM22.9485 57.0092C23.7368 57.1808 24.54 57.2809 25.343 57.3811M22.9485 57.0092L25.343 57.3811M25.343 57.3811C25.7297 57.4293 26.1164 57.4776 26.5013 57.5338L25.343 57.3811ZM33.3421 1.78894L33.3426 1.78902C38.634 2.68883 43.303 4.90362 47.2968 8.47633C52.0987 12.7828 55.0975 18.1093 56.2298 24.4709C56.3522 25.1641 56.4401 25.8569 56.5295 26.5621C56.57 26.8815 56.6109 27.2035 56.6554 27.5292V30.9663C56.6174 31.1062 56.588 31.2482 56.5675 31.3917L56.565 31.409L56.5637 31.4264C56.2365 35.7253 55.0047 39.7428 52.7652 43.4097L52.7651 43.4099C48.3401 50.6613 41.964 55.108 33.5999 56.6832L33.5997 56.6833C32.9493 56.806 32.3068 56.8852 31.6455 56.9668C31.2877 57.011 30.9244 57.0558 30.5514 57.1085H27.0864C27.0567 57.1027 27.0255 57.0964 26.9932 57.0899C26.8641 57.0639 26.7175 57.0344 26.5785 57.0138L26.5772 57.0136C26.1684 56.9539 25.7696 56.9042 25.3773 56.8554C24.5885 56.7571 23.8259 56.6622 23.0603 56.4956L23.0599 56.4955C16.2891 55.0281 10.7796 51.5319 6.61359 46.0189C2.02449 39.9368 0.24343 33.0487 1.23815 25.5009L1.23816 25.5008C2.03851 19.4206 4.65138 14.1794 8.95093 9.8054L8.95116 9.80516C13.1236 5.55506 18.1451 2.89369 24.0182 1.85942L24.0182 1.85943L24.0222 1.85869C24.6938 1.73506 25.3617 1.64903 26.0455 1.56095C26.3833 1.51744 26.7249 1.47343 27.0729 1.42413H30.5546C30.8629 1.46397 31.1664 1.49968 31.4669 1.53504C32.0999 1.60953 32.7195 1.68244 33.3421 1.78894Z"
                    fill="#292D39"
                    stroke="#515564"
                    stroke-width="1.05139"
                  />
                  <path
                    d="M25.4969 31.0556H23.6095C23.0884 31.0556 22.5733 31.0645 22.0478 31.0556C21.503 31.0423 21.3254 30.8798 21.3209 30.3405C21.3071 28.928 21.3071 27.515 21.3209 26.1016C21.3209 25.5667 21.5178 25.3983 22.0611 25.3953C23.0692 25.3953 24.0773 25.3953 25.0839 25.3953H25.5028C25.5028 25.2476 25.5028 25.1116 25.5028 24.9801C25.5265 23.6932 25.4792 22.4004 25.5887 21.1194C25.8685 17.8586 28.3628 15.5301 31.6418 15.4237C32.9741 15.3809 34.3063 15.4045 35.6505 15.4089C36.1197 15.4089 36.3107 15.601 36.3137 16.0723C36.3196 17.3942 36.3196 18.7165 36.3137 20.0394C36.3137 20.5462 36.1331 20.7294 35.6105 20.7412C34.6942 20.7634 33.7764 20.7634 32.8601 20.7781C31.8312 20.7929 31.399 21.1948 31.3797 22.2084C31.3605 23.2219 31.3797 24.2591 31.3797 25.3244H31.7765C32.943 25.3244 34.1095 25.3244 35.276 25.3244C36.0161 25.3244 36.1834 25.4958 36.1849 26.2109C36.1849 27.5554 36.1849 28.9004 36.1849 30.2459C36.1849 30.8473 36.025 31.0098 35.4181 31.0113C34.0932 31.0113 32.7683 31.0113 31.3812 31.0113V42.0629C31.3812 43.0381 31.2776 43.14 30.2843 43.14C28.9826 43.14 27.6804 43.14 26.3777 43.14C25.6805 43.14 25.5117 42.9716 25.5117 42.2831C25.5117 38.6878 25.5117 35.0926 25.5117 31.4974L25.4969 31.0556Z"
                    fill="white"
                  />
                  <path
                    d="M161.075 57.0136L161.076 57.0137C161.217 57.0345 161.365 57.0642 161.494 57.0903C161.526 57.0967 161.557 57.1028 161.586 57.1085H165.051C165.446 57.0526 165.831 57.0046 166.211 56.9572C166.85 56.8776 167.473 56.7998 168.104 56.6899C176.465 55.1138 182.841 50.6669 187.266 43.4154C189.505 39.7479 190.736 35.7299 191.065 31.4302L191.067 31.4125L191.069 31.3949C191.09 31.2524 191.119 31.1113 191.155 30.9722V27.5318C191.118 27.252 191.083 26.975 191.048 26.6999C190.953 25.9486 190.859 25.212 190.728 24.4737C189.597 18.1116 186.594 12.7844 181.795 8.47715L181.795 8.47708C177.808 4.89712 173.137 2.68911 167.846 1.78907L167.846 1.78898C167.218 1.68155 166.594 1.60818 165.954 1.53296C165.659 1.49825 165.361 1.46316 165.057 1.42413H161.573C161.286 1.46294 161.001 1.49943 160.719 1.53566C159.978 1.63059 159.252 1.72374 158.52 1.85215L158.519 1.85237C152.647 2.86767 147.624 5.53325 143.451 9.78409C139.151 14.1663 136.539 19.4083 135.738 25.4893L135.738 25.4893C134.743 33.0453 136.524 39.9271 141.111 46.0176L161.075 57.0136ZM161.075 57.0136C160.666 56.9539 160.267 56.9042 159.875 56.8553C159.085 56.7571 158.323 56.6621 157.558 56.4955L157.557 56.4954M161.075 57.0136L157.557 56.4954M157.557 56.4954C150.785 55.0278 145.277 51.5344 141.111 46.0181L157.557 56.4954Z"
                    fill="#292D39"
                    stroke="#515564"
                    stroke-width="1.05139"
                  />
                  <path
                    d="M170.585 44.5246H156.038C155.676 44.3946 155.288 44.3118 154.961 44.1242C153.875 43.5006 153.389 42.5327 153.391 41.2826C153.397 33.2676 153.397 25.2521 153.391 17.2362C153.391 17.1268 153.394 17.0175 153.4 16.9081C153.46 15.8383 153.943 15.0049 154.858 14.4581C155.216 14.2453 155.641 14.1449 156.042 13.9941H170.59C170.942 14.1183 171.321 14.1966 171.641 14.3783C172.754 15.0078 173.239 15.992 173.238 17.2657C173.229 25.261 173.229 33.2568 173.238 41.253C173.238 41.3727 173.238 41.4909 173.229 41.6106C173.203 42.2293 172.988 42.8252 172.613 43.3185C172.238 43.8118 171.721 44.1791 171.131 44.371C170.945 44.4286 170.769 44.4744 170.585 44.5246ZM170.159 35.3452V17.0589H156.464V35.3452H170.159ZM163.33 38.4247C163.071 38.4247 162.813 38.4174 162.554 38.4247C161.755 38.4513 161.041 39.1636 161.029 39.929C161.019 40.3213 161.164 40.7018 161.432 40.9889C161.7 41.276 162.07 41.4467 162.462 41.4643C163.038 41.4961 163.614 41.4961 164.19 41.4643C165.065 41.4156 165.605 40.8068 165.593 39.9335C165.595 39.5417 165.443 39.1647 165.171 38.8829C164.898 38.6011 164.526 38.4367 164.134 38.4247C163.866 38.4247 163.598 38.4247 163.33 38.4247Z"
                    fill="white"
                  />
                  <path
                    d="M68.4626 25.5425L68.4622 25.5458C68.3953 25.9998 68.3442 26.4502 68.292 26.9106C68.269 27.113 68.2458 27.3173 68.221 27.5248V31.0038C68.2639 31.3209 68.3031 31.6333 68.3419 31.9428C68.4294 32.6408 68.5151 33.3234 68.6369 34.0085L68.4626 25.5425ZM68.4626 25.5425C69.2611 19.8734 71.5356 14.8892 75.3748 10.6527L75.3749 10.6527M68.4626 25.5425L75.3749 10.6527M75.3749 10.6527C79.6796 5.90094 84.9911 2.94155 91.32 1.84489L75.3749 10.6527ZM124.431 31.0378C124.391 31.1785 124.36 31.3216 124.34 31.4663M124.431 31.0378V27.4919M124.431 31.0378L123.926 30.8935C123.919 30.918 123.912 30.9425 123.905 30.9671M124.431 31.0378H123.905V30.9671M124.34 31.4663L110.2 4.6823C117.744 9.16945 122.37 15.734 123.995 24.3758C124.132 25.1027 124.223 25.834 124.313 26.5651C124.351 26.8742 124.389 27.1832 124.431 27.4919M124.34 31.4663C123.966 36.3302 122.465 40.8218 119.742 44.8628L124.34 31.4663ZM124.431 27.4919H123.905V27.5271M124.431 27.4919L123.91 27.5623C123.909 27.5505 123.907 27.5388 123.905 27.5271M123.905 27.5271C123.864 27.2175 123.826 26.9128 123.789 26.6113C123.7 25.8879 123.613 25.1831 123.479 24.4732L123.479 24.473C121.882 15.9808 117.347 9.54487 109.931 5.1342L68.6369 34.0086C69.8951 41.0727 73.3658 46.8098 78.9982 51.2417M123.905 27.5271V30.9671M123.905 30.9671C123.869 31.1067 123.84 31.2484 123.819 31.3913L123.817 31.4086L123.815 31.426C123.448 36.2038 121.975 40.6072 119.306 44.569L119.305 44.5692C114.864 51.167 108.736 55.2226 100.908 56.6741L100.907 56.6743C100.224 56.8025 99.5461 56.8866 98.8502 56.9729C98.5055 57.0157 98.1564 57.059 97.7997 57.1085M97.7997 57.1085H94.3612M97.7997 57.1085H97.8362V57.6342M97.7997 57.1085C97.7876 57.1102 97.7755 57.1119 97.7634 57.1136L97.8362 57.6342M94.3612 57.1085C94.2228 57.0719 94.0824 57.0432 93.9408 57.0225L93.9237 57.02L93.9065 57.0186C88.3549 56.5759 83.3687 54.6772 78.9982 51.2417M94.3612 57.1085C94.3858 57.1151 94.4104 57.1218 94.4349 57.1288L94.2902 57.6342M94.3612 57.1085H94.2902V57.6342M78.9982 51.2417L78.6731 51.6548L78.998 51.2415C78.998 51.2416 78.9981 51.2416 78.9982 51.2417ZM94.2902 57.6342H97.8362M94.2902 57.6342C94.1506 57.5942 94.0084 57.5636 93.8647 57.5426L97.8362 57.6342M97.8362 57.6342C98.1879 57.585 98.5404 57.5413 98.8929 57.4975C99.5992 57.4098 100.305 57.3221 101.004 57.191L97.8362 57.6342ZM98.2238 1.51278C102.41 1.82776 106.334 2.9964 109.931 5.13412L91.3201 1.84489C91.9449 1.73666 92.5587 1.6577 93.1852 1.5771C93.5599 1.5289 93.9391 1.48012 94.328 1.42413H97.765C97.9055 1.46134 98.0482 1.48983 98.1923 1.50945L98.208 1.51159L98.2238 1.51278Z"
                    fill="#292D39"
                    stroke="#515564"
                    stroke-width="1.05139"
                  />
                  <path
                    d="M95.2647 15.6621H96.7511C96.856 15.6769 96.9594 15.6931 97.0643 15.7064C97.4943 15.7567 97.9272 15.7892 98.3542 15.8542C100.121 16.1491 101.811 16.7979 103.322 17.7616C103.67 17.9833 104.003 18.23 104.356 18.4723L101.2 22.5694C99.6737 21.3999 97.7934 20.7879 95.8713 20.8349C93.9492 20.8819 92.1011 21.5852 90.634 22.828C89.1669 24.0707 88.1692 25.7779 87.8067 27.6661C87.4442 29.5543 87.7386 31.5097 88.6411 33.2074C89.4961 34.8271 90.8575 36.1225 92.5177 36.8959C94.1779 37.6693 96.0456 37.8782 97.8356 37.4906C101.21 36.7873 103.463 34.0687 104.031 31.8525H96.0774V26.668H109.317C109.432 26.668 109.548 26.668 109.663 26.6591V30.0573C109.647 30.1504 109.627 30.245 109.613 30.3395C109.528 30.9305 109.48 31.5215 109.354 32.0948C108.643 35.3645 106.967 38.0417 104.307 40.0511C100.997 42.5629 97.2697 43.3903 93.2051 42.5422C89.9546 41.864 87.307 40.159 85.2843 37.529C83.1005 34.6893 82.1904 31.455 82.5332 27.8958C82.7895 25.0699 83.9531 22.4027 85.8501 20.2926C87.8796 17.9491 90.6611 16.3846 93.7178 15.8675C94.229 15.7818 94.7491 15.7316 95.2647 15.6621Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-64 mt-5" />
        </>
      )}
      <SecureSection>
        <div className={`${gamePlayURL ? "h-96" : "h-64"} transition-all mt-5`}>
          {gamePlayURL ? (
            <GamePlayer url={gamePlayURL} onClose={() => setgamePlayURL("")} />
          ) : (
            <div className="bg-darkPrimary h-full flex justify-center items-center">
              slider for games/advertisement
            </div>
          )}
        </div>
      </SecureSection>
      {/* menubar */}
      <div className="bg-[#212530] overflow-y-auto w-full flex gap-2 flex-row justify-between z-20 border-[#2E323D] border rounded-full lap:p-3 mobtab:p-2">
        {menubar.map((item) => (
          <div
            className={`${
              true ? "border-[#454A5D] border" : ""
            } justify-center items-center w-fit flex flex-row gap-2 rounded-full px-3 py-2 cursor-pointer`}
            style={{
              background: true
                ? "linear-gradient(180deg, #323846 0%, #2C3240 80.87%)"
                : "inherit",
              whiteSpace: "nowrap",
            }}
          >
            {item.icon({
              height: 18,
              width: 18,
            })}
            {item.title}
          </div>
        ))}
        <SearchField className={"mobtab:w-48 w-full"} />
      </div>
      <div>
        <Game
          title={
            <div className="flex flex-row gap-2 items-center text-lg font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="40"
                viewBox="0 0 29 40"
                fill="none"
                className="h-8 w-8"
              >
                <path
                  d="M11.9222 0C12.4178 0.369123 12.9262 0.722028 13.4064 1.10989C15.9117 3.13335 17.6563 5.64255 18.3365 8.83883C18.7307 10.6906 18.5762 12.5108 18.1935 14.3455C18.0295 15.1315 17.939 15.9794 18.0496 16.7663C18.2655 18.3043 19.8221 19.5101 21.3695 19.5068C22.9984 19.5037 24.4471 18.3175 24.7335 16.7177C24.8055 16.3144 24.7684 15.8927 24.8041 15.4816C24.8173 15.3312 24.8966 15.1866 24.9455 15.0395C25.0896 15.1173 25.2807 15.1598 25.3712 15.2784C26.9437 17.3197 27.881 19.6407 28.3531 22.1575C29.1302 26.3 28.4397 30.17 25.9727 33.6151C22.9534 37.8312 18.8164 39.98 13.6084 39.789C7.20642 39.5549 1.68077 34.8732 0.362213 28.5746C-0.557146 24.1865 0.287066 20.0876 2.74148 16.329C4.1025 14.2445 5.85378 12.4904 7.52154 10.6657C8.72891 9.34441 9.88768 7.98649 10.7023 6.37325C11.6253 4.54329 11.8971 2.61798 11.5644 0.598148C11.5328 0.406315 11.5923 0.199662 11.6107 0H11.9222ZM12.5474 21.7103L12.6346 21.6977C12.6653 21.1544 12.7061 20.6113 12.7184 20.0677C12.7217 19.9313 12.6379 19.7923 12.5944 19.6544C12.4499 19.7067 12.2667 19.7196 12.1672 19.8174C11.5867 20.3902 11.0076 20.9662 10.4612 21.5713C8.47749 23.7693 7.20475 26.2581 7.14301 29.3092C7.05417 33.7141 10.7467 37.1841 15.1217 36.7197C19.714 36.2314 22.7053 31.3755 21.07 27.0654C20.8923 26.5973 20.7756 26.5682 20.3819 26.8948C17.706 29.1149 13.8283 27.9116 12.9391 24.5459C12.6974 23.6295 12.672 22.6566 12.5474 21.7103Z"
                  fill="#FF6536"
                />
                <path
                  d="M12.5472 21.7102C12.6718 22.6565 12.6972 23.6294 12.9383 24.5449C13.8275 27.9115 17.7052 29.1148 20.3811 26.8939C20.7747 26.5672 20.8915 26.5963 21.0692 27.0644C22.7045 31.3756 19.7132 36.2304 15.1209 36.7184C10.7473 37.1832 7.05336 33.7131 7.14219 29.308C7.20449 26.258 8.47723 23.7692 10.4621 21.5712C11.0085 20.9661 11.5876 20.39 12.1681 19.8173C12.2675 19.7195 12.4508 19.7055 12.5952 19.6543C12.6388 19.7922 12.7226 19.9311 12.7192 20.0676C12.7058 20.6112 12.6651 21.1543 12.6354 21.6976L12.5472 21.7102Z"
                  fill="#FBBF00"
                />
              </svg>
              Hot Games
            </div>
          }
          setgamePlayURL={setgamePlayURL}
          items={imagedata}
        />
      </div>

      <Game
        title={
          <div className="flex flex-row gap-2 items-center text-lg font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="36"
              viewBox="0 0 34 36"
              fill="none"
              className="h-8 w-8"
            >
              <path
                d="M31.0679 0H27.6734H27.6608C27.4333 0.0280886 27.2058 0.058986 26.9782 0.0842657C23.1638 0.505594 17.0201 3.46472 14.5792 6.62469C12.0513 9.39492 11.144 14.2872 10.9888 16.7366C10.99 16.8067 10.9686 16.8754 10.9277 16.9325C11.2676 16.8995 11.6363 16.8791 12.0302 16.8784C12.4242 16.8777 12.7823 16.896 13.1179 16.9276C13.1037 16.9091 13.0967 16.8862 13.0983 16.863C13.4887 9.45882 19.414 3.33973 26.1075 2.35944C26.127 2.35651 26.147 2.3593 26.165 2.36745C26.183 2.3756 26.1982 2.38878 26.2089 2.40539C26.2196 2.42201 26.2252 2.44136 26.2252 2.46111C26.2251 2.48086 26.2194 2.50018 26.2086 2.51673C24.3772 5.21675 23.5086 8.20467 23.5318 11.4594C23.5437 13.1763 23.5318 14.8933 23.5318 16.6102V16.8847C23.5319 16.906 23.525 16.9268 23.5121 16.9437C24.2274 16.8541 24.9513 16.8574 25.6658 16.9536C25.6478 16.9346 25.638 16.9094 25.6384 16.8833C25.6384 14.8715 25.6047 12.8807 25.6461 10.8899C25.7107 7.78194 26.743 5.0117 28.7654 2.64524C29.5076 1.7773 30.3404 0.986611 31.141 0.168531C31.153 0.153861 31.1608 0.136151 31.1634 0.11735C31.1661 0.0985481 31.1635 0.0793831 31.1559 0.0619625C31.1484 0.044542 31.1362 0.0295408 31.1206 0.018609C31.1051 0.0076771 31.0869 0.00123804 31.0679 0Z"
                fill="#534741"
              />
              <path
                d="M8.64479 1.69563C5.10774 1.6219 2.41686 3.34724 0.0286256 5.86257C0.018966 5.87256 0.0114533 5.88442 0.00654989 5.89742C0.00164653 5.91043 -0.00054366 5.92429 0.000114165 5.93817C0.00077199 5.95205 0.00426391 5.96565 0.0103749 5.97813C0.0164859 5.99061 0.0250867 6.00171 0.0356477 6.01074C0.831958 6.70031 1.5735 7.43343 2.41334 8.0296C5.49185 10.2156 10.2627 8.14617 13.8004 6.58094C13.0568 3.40833 11.1152 1.7469 8.64479 1.69563Z"
                fill="#39B54A"
              />
              <path
                d="M16.2814 34.4381C16.2928 34.4493 16.3014 34.463 16.3066 34.4781C16.3117 34.4932 16.3133 34.5094 16.3111 34.5252C16.3089 34.541 16.303 34.5561 16.294 34.5693C16.2849 34.5824 16.2729 34.5933 16.2589 34.601C15.3884 35.0833 14.4429 35.4156 13.462 35.5841C12.2095 35.793 10.9277 35.7482 9.69287 35.4522C8.458 35.1562 7.29518 34.6152 6.27342 33.8612C5.25167 33.1072 4.39181 32.1556 3.74489 31.0629C3.09797 29.9702 2.67718 28.7587 2.50749 27.5002C1.79334 22.3481 5.4308 17.5772 10.6089 16.8855C10.6848 16.875 10.7332 16.8638 10.7873 16.8575C10.8668 16.8406 10.9472 16.8287 11.0282 16.8216C11.3336 16.795 11.5899 16.7704 11.941 16.7697C12.2921 16.769 12.5211 16.7697 12.823 16.7943C12.908 16.8055 13.0274 16.8048 13.0835 16.8209L13.1032 16.8266C14.2043 17.0134 15.2709 17.3308 16.2632 17.8799C16.277 17.8879 16.2887 17.899 16.2975 17.9123C16.3064 17.9255 16.312 17.9407 16.3141 17.9565C16.3161 17.9723 16.3145 17.9884 16.3093 18.0035C16.3041 18.0186 16.2955 18.0323 16.2842 18.0435C11.8469 22.4211 11.8231 30.0022 16.2814 34.4381Z"
                fill="#C6053C"
              />
              <path
                d="M33.7466 28.2077C32.7937 32.7595 28.5193 36.0311 23.9458 35.7221C21.6264 35.5687 19.4429 34.5732 17.8059 32.9229C16.1688 31.2725 15.1911 29.081 15.0565 26.7604C14.7545 21.7522 18.4117 17.4912 23.3602 16.8431C23.3861 16.8396 23.4079 16.8346 23.4304 16.8318C23.4497 16.8311 23.469 16.8287 23.488 16.8248C23.8335 16.7703 24.1824 16.7408 24.5322 16.7363C24.8554 16.7382 25.1783 16.7591 25.4991 16.7988C25.5387 16.8025 25.5773 16.8134 25.6129 16.8311C25.6232 16.8366 25.6343 16.8404 25.6459 16.8424C28.7693 17.3262 31.1934 18.8739 32.7684 21.6399C33.9348 23.6911 34.2297 25.9002 33.7466 28.2077Z"
                fill="#C6053C"
              />
              <path
                d="M7.2403 25.792C7.08156 25.7922 6.92483 25.7566 6.78181 25.6877C6.63879 25.6188 6.51319 25.5185 6.4144 25.3942C6.31561 25.27 6.24617 25.125 6.21129 24.9701C6.17641 24.8153 6.17698 24.6545 6.21296 24.4999C6.65606 22.7128 8.16371 21.1785 9.98526 20.7192C10.1404 20.6815 10.302 20.6796 10.458 20.7136C10.6139 20.7475 10.7601 20.8165 10.8855 20.9152C11.0109 21.014 11.1122 21.1399 11.1818 21.2836C11.2514 21.4272 11.2874 21.5848 11.2872 21.7444C11.2874 21.975 11.2119 22.1993 11.0724 22.3828C10.9328 22.5664 10.7369 22.6991 10.5147 22.7605C9.30902 23.0969 8.55414 23.9459 8.26132 24.9992C8.2018 25.2251 8.06957 25.4252 7.88503 25.5685C7.7005 25.7117 7.47393 25.7903 7.2403 25.792Z"
                fill="#DD698A"
              />
              <path
                d="M23.1136 22.7807C21.9578 23.0988 21.2036 23.8488 20.8911 24.9934C20.8324 25.2177 20.7012 25.4164 20.518 25.5586C20.3348 25.7009 20.1098 25.7786 19.8778 25.7799H19.8406C19.6807 25.7796 19.523 25.7426 19.3795 25.672C19.2361 25.6013 19.1107 25.4987 19.0131 25.3721C18.9154 25.2455 18.848 25.0982 18.816 24.9415C18.7841 24.7848 18.7884 24.6229 18.8287 24.4681C19.2501 22.8355 20.644 21.212 22.6052 20.719C22.759 20.6816 22.9192 20.6797 23.0738 20.7134C23.2284 20.7471 23.3733 20.8155 23.4975 20.9135C23.6217 21.0114 23.722 21.1364 23.7908 21.2789C23.8596 21.4213 23.8951 21.5776 23.8945 21.7358V21.7681C23.8934 21.9992 23.8164 22.2235 23.6753 22.4065C23.5342 22.5894 23.3369 22.7209 23.1136 22.7807Z"
                fill="#DD698A"
              />
            </svg>
            Slots Games
          </div>
        }
        items={imagedata}
      />

      <Game
        title={
          <div className="flex flex-row gap-2 items-center text-lg font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="35"
              viewBox="0 0 31 35"
              fill="none"
              className="h-8 w-8"
            >
              <path
                d="M23.1131 17.5449H24.4358C23.54 22.9703 22.6484 28.7468 21.7545 34.1619H21.3343C17.1546 34.1619 12.9749 34.164 8.79503 34.1684C8.47483 34.1684 8.34646 34.1053 8.28902 33.7519C7.44526 28.5601 6.58057 22.9944 5.72174 17.8048C5.7095 17.73 5.70915 17.6531 5.70117 17.5504H7.00609C7.00609 18.2809 7.00839 19.0169 7.00609 19.7526C7.00325 20.3927 7.14527 20.996 7.47185 21.5471C8.12608 22.6508 9.12799 23.1694 10.3833 23.2502C10.4953 23.2575 10.6074 23.2656 10.6276 23.267C11.0026 24.3681 11.3263 25.4271 11.7268 26.4565C12.0011 27.1621 12.4497 27.7766 13.0355 28.2761C14.2143 29.2812 15.8985 29.2867 17.0779 28.2812C17.9018 27.5789 18.3899 26.654 18.7351 25.6556C18.976 24.9579 19.1498 24.236 19.3281 23.5186C19.378 23.3186 19.4471 23.258 19.6512 23.2458C21.8298 23.1163 23.1135 21.7494 23.1147 19.5722C23.1135 18.9085 23.1131 18.2449 23.1131 17.5449Z"
                fill="#4D2E2E"
              />
              <path
                d="M23.1523 34.1453C24.0358 28.7932 24.9147 23.0911 25.8012 17.7207C25.9935 17.7679 26.165 17.7962 26.3272 17.8515C28.6362 18.6398 30.2202 20.8342 30.2267 23.2779C30.2349 26.3452 30.2297 29.7896 30.2281 32.8568C30.2281 33.7031 29.7709 34.1609 28.9275 34.1619C27.1254 34.1639 25.3234 34.1639 23.5213 34.1619C23.4089 34.1618 23.2963 34.152 23.1523 34.1453Z"
                fill="#F0E6E1"
              />
              <path
                d="M7.08046 34.1522C5.03018 34.1522 3.01341 34.1728 0.997704 34.1394C0.400741 34.1295 0.00607442 33.5832 0.00501063 32.9327C0.00128736 30.7608 -0.00491808 28.2104 0.00678361 26.038C0.0131664 24.8252 -0.0254847 23.6051 0.0954328 22.4021C0.306595 20.2935 2.15085 18.2721 4.19953 17.7624C4.26017 17.7473 4.32364 17.7447 4.43197 17.7305C5.31386 23.0746 6.19432 28.7847 7.08046 34.1522Z"
                fill="#F0E6E1"
              />
              <path
                d="M15.1164 18.7302C13.9946 19.4818 12.9869 20.2046 11.9305 20.8477C11.2077 21.2879 10.3768 21.4652 9.52386 21.4716C8.68542 21.4776 8.07356 20.8897 8.06115 20.0532C8.04732 19.1375 8.04732 18.2215 8.06115 17.3051C8.0725 16.4642 8.67904 15.8454 9.5127 15.8867C10.0487 15.9133 10.5981 15.9993 11.1084 16.1633C12.6158 16.6479 13.7835 17.6822 15.1164 18.7302Z"
                fill="#BF283F"
              />
              <path
                d="M15.0664 18.6763C16.3151 17.7189 17.4317 16.7043 18.8753 16.2181C19.4271 16.0321 20.0221 15.9266 20.604 15.8898C21.4195 15.8382 22.0401 16.4509 22.056 17.2622C22.0738 18.2109 22.0766 19.1606 22.0546 20.1091C22.0369 20.8956 21.4148 21.5257 20.6299 21.4566C19.9283 21.3945 19.2115 21.2527 18.553 21.0066C17.2401 20.5153 16.2268 19.5437 15.0664 18.6763Z"
                fill="#BF283F"
              />
              <path
                d="M12.123 22.229C13.0652 21.6668 13.9249 21.144 14.7978 20.6442C14.9244 20.5716 15.1524 20.5406 15.2678 20.6064C16.172 21.1206 17.0585 21.6647 17.9968 22.2264C17.6954 23.7352 17.3376 25.2842 16.5075 26.6721C15.5866 28.2123 14.5394 28.2169 13.6207 26.6851C12.7884 25.2975 12.4312 23.7467 12.123 22.229Z"
                fill="#F0E6E1"
              />
              <path
                d="M9.53023 15.5823C8.18808 15.6554 6.86774 15.4377 5.54102 15.8868C5.60254 15.6332 5.65449 15.4258 5.70324 15.2166C6.19791 13.0989 6.41616 10.9467 6.44577 8.7778C6.48212 6.11691 7.44892 3.88436 9.44743 2.12574C14.3215 -2.16488 22.1331 0.378822 23.5519 6.71777C23.6824 7.29947 23.7568 7.89236 23.774 8.48827C23.84 10.9173 24.0419 13.3285 24.6543 15.6905C24.666 15.7353 24.672 15.7818 24.6898 15.8777C23.3825 15.4447 22.0585 15.649 20.7142 15.5852C20.7701 15.4869 20.8124 15.4065 20.8601 15.3292C21.6516 14.0453 22.0766 12.6544 22.048 11.1417C22.0303 10.2198 22.0682 9.28381 21.9216 8.37994C21.4628 5.55079 18.7962 3.40087 15.9248 3.46878C15.3598 3.4819 14.8295 3.64306 14.4038 4.01237C13.4003 4.88255 12.2053 5.16144 10.927 5.19229C10.2912 5.20772 9.70983 5.3492 9.2024 5.74352C8.6081 6.20449 8.22389 6.81599 8.20776 7.55923C8.17549 9.04002 8.17673 10.5242 8.24162 12.0037C8.29481 13.2166 8.75224 14.3235 9.39123 15.352C9.43218 15.4155 9.46977 15.4809 9.53023 15.5823Z"
                fill="#FFAF40"
              />
              <path
                d="M15.1096 16.3383C14.2793 15.7447 13.413 15.2647 12.4147 15.0959C11.9643 15.0195 11.5005 15.0156 11.042 14.9975C10.8746 14.991 10.7667 14.9527 10.6697 14.8025C9.97237 13.7291 9.59401 12.5616 9.59259 11.2778C9.59153 10.1016 9.59153 8.92554 9.59259 7.74958C9.59259 7.07035 9.94719 6.71238 10.6293 6.69926C11.9978 6.67302 13.3102 6.41363 14.5135 5.73281C14.806 5.56529 15.0838 5.37342 15.344 5.15925C15.6044 4.94649 15.8807 4.85022 16.2163 4.85784C18.5155 4.91369 20.5246 6.82585 20.6245 9.15094C20.6723 10.2591 20.6168 11.3789 20.5105 12.4842C20.4275 13.3464 20.0216 14.1229 19.5332 14.8397C19.4814 14.9156 19.3559 14.9903 19.2685 14.9853C17.7453 14.8981 16.4193 15.4135 15.2069 16.2883C15.1756 16.307 15.1431 16.3237 15.1096 16.3383Z"
                fill="#FFBB99"
              />
            </svg>
            Live Casino
          </div>
        }
        items={imagedata}
      />
      <div>
        <div className="ms-5">
          <div className="text-light mb-4 flex items-center gap-2 text-white">
            <Leaderboard />
            <div className="text-2xl bold">Leaderboard</div>
          </div>
          <TableTabBar />
        </div>
        <Table />
      </div>
    </div>
  );
}
