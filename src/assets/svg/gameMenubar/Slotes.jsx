import React from "react";

export default function Slotes(props) {
  if (props?.active) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        {...props}
      >
        <path
          d="M16.7379 0H14.909H14.9022C14.7796 0.0151337 14.6571 0.0317807 14.5345 0.045401C12.4793 0.272406 9.16921 1.86674 7.85409 3.56927C6.49207 5.06183 6.00325 7.69774 5.91963 9.01739C5.92027 9.0552 5.90873 9.0922 5.88672 9.12295C6.06984 9.10517 6.26847 9.09419 6.48072 9.09382C6.69296 9.09344 6.88592 9.10327 7.06677 9.1203C7.05911 9.11037 7.05535 9.098 7.05617 9.08549C7.26653 5.09626 10.459 1.79939 14.0653 1.27123C14.0759 1.26965 14.0866 1.27115 14.0963 1.27554C14.106 1.27994 14.1142 1.28703 14.12 1.29599C14.1257 1.30494 14.1288 1.31536 14.1287 1.326C14.1287 1.33665 14.1256 1.34705 14.1198 1.35598C13.1331 2.8107 12.6651 4.42054 12.6776 6.17415C12.684 7.0992 12.6776 8.02424 12.6776 8.94929V9.09722C12.6777 9.1087 12.6739 9.11987 12.667 9.129C13.0524 9.08071 13.4424 9.08249 13.8274 9.1343C13.8177 9.1241 13.8124 9.11052 13.8126 9.09646C13.8126 8.01252 13.7944 6.93992 13.8168 5.86732C13.8516 4.19278 14.4077 2.70022 15.4973 1.42521C15.8973 0.957582 16.346 0.53157 16.7773 0.090802C16.7838 0.0828979 16.788 0.0733561 16.7894 0.0632261C16.7908 0.0530961 16.7894 0.0427703 16.7853 0.0333844C16.7813 0.0239985 16.7747 0.0159161 16.7663 0.0100262C16.758 0.0041363 16.7481 0.000667037 16.7379 0Z"
          fill="#534741"
        />
        <path
          d="M4.65767 0.911382C2.75197 0.871656 1.30216 1.80124 0.015423 3.15646C0.0102186 3.16184 0.00617083 3.16823 0.00352898 3.17524C0.000887124 3.18224 -0.000292915 3.18971 6.15103e-05 3.19719C0.000415936 3.20467 0.00229732 3.212 0.00558984 3.21872C0.00888236 3.22545 0.0135163 3.23143 0.0192064 3.23629C0.448246 3.60782 0.847774 4.00281 1.30027 4.32402C2.95892 5.5018 5.52937 4.38683 7.43546 3.5435C7.03479 1.83416 5.98868 0.939001 4.65767 0.911382Z"
          fill="#39B54A"
        />
        <path
          d="M8.77213 18.5547C8.77827 18.5607 8.78291 18.5681 8.78569 18.5763C8.78846 18.5844 8.7893 18.5931 8.78812 18.6016C8.78694 18.6101 8.78379 18.6183 8.77891 18.6254C8.77404 18.6325 8.76757 18.6383 8.76003 18.6425C8.29099 18.9023 7.78156 19.0814 7.25309 19.1721C6.57825 19.2847 5.88766 19.2605 5.22233 19.1011C4.55701 18.9416 3.93049 18.6501 3.37999 18.2439C2.82949 17.8376 2.36621 17.3249 2.01766 16.7362C1.66911 16.1475 1.44239 15.4947 1.35097 14.8167C0.966192 12.0408 2.926 9.47033 5.71589 9.09767C5.75675 9.09199 5.78286 9.08594 5.81199 9.08253C5.85481 9.07345 5.89815 9.06701 5.94176 9.06324C6.10634 9.04886 6.24443 9.03562 6.43361 9.03524C6.62278 9.03486 6.74612 9.03524 6.9088 9.04848C6.95458 9.05453 7.0189 9.05416 7.04917 9.06286L7.05976 9.06588C7.653 9.16652 8.2277 9.33753 8.7623 9.6334C8.76973 9.63771 8.77607 9.64368 8.78083 9.65084C8.78558 9.65799 8.78863 9.66615 8.78972 9.67467C8.79082 9.6832 8.78994 9.69186 8.78715 9.69999C8.78437 9.70812 8.77975 9.71549 8.77365 9.72155C6.38291 12.0801 6.37004 16.1647 8.77213 18.5547Z"
          fill="#C6053C"
        />
        <path
          d="M18.1809 15.1962C17.6675 17.6486 15.3645 19.4113 12.9004 19.2448C11.6507 19.1622 10.4743 18.6258 9.59227 17.7367C8.71027 16.8475 8.18348 15.6668 8.11095 14.4165C7.94826 11.7181 9.91867 9.42234 12.5848 9.07313C12.5988 9.07124 12.6106 9.06859 12.6227 9.06708C12.6331 9.06668 12.6435 9.06541 12.6537 9.0633C12.8398 9.03395 13.0279 9.01802 13.2163 9.01562C13.3905 9.01665 13.5644 9.0279 13.7373 9.0493C13.7586 9.05125 13.7794 9.05715 13.7986 9.0667C13.8041 9.06967 13.8101 9.07171 13.8163 9.07275C15.4992 9.33343 16.8052 10.1673 17.6539 11.6576C18.2823 12.7627 18.4412 13.953 18.1809 15.1962Z"
          fill="#C6053C"
        />
        <path
          d="M3.90032 13.8976C3.81479 13.8977 3.73034 13.8785 3.65329 13.8414C3.57623 13.8043 3.50856 13.7502 3.45533 13.6833C3.4021 13.6163 3.3647 13.5382 3.3459 13.4548C3.32711 13.3714 3.32742 13.2848 3.3468 13.2015C3.58554 12.2386 4.39784 11.4119 5.37925 11.1645C5.46282 11.1442 5.54991 11.1431 5.63394 11.1614C5.71796 11.1797 5.79673 11.2169 5.8643 11.2701C5.93186 11.3233 5.98645 11.3912 6.02394 11.4686C6.06142 11.5459 6.08083 11.6308 6.0807 11.7168C6.08081 11.8411 6.04015 11.9619 5.96498 12.0608C5.8898 12.1597 5.78425 12.2312 5.66452 12.2643C5.01491 12.4455 4.60819 12.9029 4.45042 13.4705C4.41836 13.5922 4.34711 13.7 4.24769 13.7772C4.14826 13.8544 4.02619 13.8967 3.90032 13.8976Z"
          fill="#DD698A"
        />
        <path
          d="M12.4538 12.2752C11.8311 12.4466 11.4247 12.8506 11.2564 13.4673C11.2247 13.5882 11.154 13.6953 11.0553 13.7719C10.9566 13.8485 10.8354 13.8904 10.7104 13.8911H10.6904C10.6042 13.8909 10.5192 13.871 10.4419 13.8329C10.3647 13.7949 10.2971 13.7396 10.2445 13.6714C10.1919 13.6031 10.1555 13.5238 10.1383 13.4394C10.1211 13.3549 10.1235 13.2677 10.1452 13.1843C10.3722 12.3047 11.1232 11.43 12.1799 11.1644C12.2627 11.1442 12.349 11.1432 12.4323 11.1613C12.5156 11.1795 12.5937 11.2163 12.6606 11.2691C12.7275 11.3219 12.7816 11.3892 12.8187 11.466C12.8557 11.5428 12.8748 11.627 12.8745 11.7122V11.7296C12.874 11.8541 12.8325 11.9749 12.7564 12.0735C12.6804 12.1721 12.5741 12.243 12.4538 12.2752Z"
          fill="#DD698A"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      {...props}
    >
      <path
        d="M16.7399 0H14.911H14.9042C14.7816 0.0151337 14.659 0.0317807 14.5364 0.045401C12.4813 0.272406 9.17116 1.86674 7.85605 3.56927C6.49402 5.06183 6.0052 7.69774 5.92159 9.01739C5.92073 9.03278 5.9187 9.04809 5.91553 9.06317C5.91164 9.085 5.90241 9.10554 5.88867 9.12295C6.07179 9.10517 6.27042 9.09419 6.48267 9.09382C6.69492 9.09344 6.88787 9.10327 7.06872 9.1203C7.06107 9.11037 7.0573 9.098 7.05812 9.08549V9.06317C7.27908 5.08415 10.4666 1.79901 14.0661 1.27123C14.0767 1.26965 14.0874 1.27115 14.0971 1.27554C14.1068 1.27994 14.115 1.28703 14.1208 1.29599C14.1265 1.30494 14.1296 1.31536 14.1296 1.326C14.1295 1.33665 14.1264 1.34705 14.1206 1.35598C13.1339 2.8107 12.6659 4.42054 12.6784 6.17415C12.6848 7.0992 12.6784 8.02424 12.6784 8.94929V9.09722C12.6785 9.1087 12.6747 9.11987 12.6678 9.129C13.0532 9.08071 13.4432 9.08249 13.8282 9.1343C13.8185 9.1241 13.8132 9.11052 13.8134 9.09646V9.07074C13.8134 7.99549 13.7953 6.93122 13.8176 5.86732C13.8524 4.19278 14.4085 2.70022 15.4982 1.42521C15.8981 0.957582 16.3468 0.53157 16.7781 0.090802C16.7846 0.0829735 16.7887 0.073528 16.7902 0.0634883C16.7917 0.0534487 16.7904 0.0431975 16.7864 0.0338449C16.7825 0.0244923 16.7761 0.0163947 16.7679 0.0104289C16.7597 0.00446321 16.75 0.000856714 16.7399 0Z"
        fill="#7C8497"
      />
      <path
        d="M4.65767 0.913335C2.75197 0.873609 1.30216 1.80319 0.015423 3.15841C0.0102186 3.1638 0.00617083 3.17019 0.00352898 3.17719C0.000887124 3.1842 -0.000292915 3.19167 6.15103e-05 3.19915C0.000415936 3.20662 0.00229732 3.21395 0.00558984 3.22068C0.00888236 3.2274 0.0135163 3.23338 0.0192064 3.23824C0.448246 3.60978 0.847774 4.00476 1.30027 4.32598C2.95892 5.50375 5.52937 4.38878 7.43546 3.54546C7.03479 1.83611 5.98868 0.940954 4.65767 0.913335Z"
        fill="#7C8497"
      />
      <path
        d="M8.77464 9.72314C8.78074 9.71709 8.78536 9.70971 8.78815 9.70158C8.79093 9.69345 8.79181 9.68479 8.79072 9.67627C8.78962 9.66774 8.78657 9.65959 8.78182 9.65243C8.77706 9.64527 8.77072 9.6393 8.76329 9.63499C8.22756 9.33799 7.65286 9.16698 7.06075 9.06748C7.057 9.06687 7.05332 9.06586 7.04978 9.06445C7.01952 9.05613 6.9552 9.05613 6.90942 9.05045C6.74673 9.03683 6.61923 9.03683 6.4346 9.03721C6.24997 9.03759 6.10885 9.05045 5.94276 9.06483C5.89914 9.06876 5.8558 9.07533 5.81298 9.0845C5.78423 9.08791 5.75812 9.09396 5.71726 9.09926C2.92737 9.46965 0.967565 12.0401 1.35309 14.8171C1.44452 15.4952 1.67124 16.1479 2.01979 16.7367C2.36834 17.3254 2.83161 17.8381 3.38212 18.2443C3.93262 18.6506 4.55913 18.9421 5.22446 19.1015C5.88979 19.261 6.58037 19.2852 7.25522 19.1726C7.78369 19.0818 8.29312 18.9028 8.76216 18.6429C8.7697 18.6388 8.77616 18.6329 8.78104 18.6258C8.78592 18.6187 8.78907 18.6106 8.79025 18.6021C8.79142 18.5935 8.79059 18.5849 8.78781 18.5767C8.78504 18.5686 8.7804 18.5612 8.77426 18.5551C6.37142 16.164 6.38428 12.0795 8.77464 9.72314ZM6.08198 11.7174C6.08209 11.8416 6.04144 11.9624 5.96626 12.0613C5.89108 12.1602 5.78554 12.2317 5.66581 12.2648C5.0162 12.4438 4.60948 12.9012 4.45133 13.4687C4.41928 13.5905 4.34805 13.6983 4.24863 13.7756C4.14921 13.8528 4.02713 13.8952 3.90122 13.8962C3.81569 13.8963 3.73124 13.8771 3.6542 13.8399C3.57716 13.8027 3.50951 13.7487 3.45632 13.6817C3.40313 13.6147 3.36576 13.5365 3.34702 13.4531C3.32828 13.3696 3.32864 13.283 3.34809 13.1997C3.58644 12.2368 4.39874 11.4105 5.38016 11.1631C5.46375 11.1427 5.55088 11.1417 5.63496 11.1599C5.71904 11.1782 5.79786 11.2153 5.86547 11.2685C5.93307 11.3218 5.9877 11.3896 6.02521 11.4671C6.06272 11.5445 6.08214 11.6295 6.08198 11.7155V11.7174Z"
        fill="#7C8497"
      />
      <path
        d="M17.6543 11.6595C16.8049 10.1693 15.4996 9.33539 13.8168 9.07471C13.8105 9.07373 13.8045 9.07168 13.799 9.06865C13.7797 9.05922 13.7588 9.05344 13.7373 9.05163C13.5646 9.03028 13.3908 9.01891 13.2167 9.01758C13.0283 9.01998 12.8403 9.03591 12.6541 9.06525C12.6438 9.06735 12.6333 9.06874 12.6227 9.06941L12.5868 9.07509C9.92062 9.4243 7.95022 11.7201 8.1129 14.4184C8.18543 15.6687 8.71216 16.8493 9.59408 17.7385C10.476 18.6277 11.6523 19.164 12.9019 19.2468C15.3668 19.4133 17.6691 17.6506 18.1832 15.1985C18.4431 13.9549 18.2842 12.7647 17.6543 11.6595ZM12.8755 11.7288C12.8747 11.8532 12.8331 11.9739 12.757 12.0723C12.6809 12.1708 12.5746 12.2415 12.4544 12.2736C11.832 12.445 11.4253 12.8494 11.2569 13.4657C11.2253 13.5866 11.1547 13.6936 11.056 13.7702C10.9574 13.8468 10.8362 13.8887 10.7114 13.8895H10.6913C10.6052 13.8893 10.5202 13.8694 10.443 13.8314C10.3657 13.7933 10.2982 13.7381 10.2456 13.6699C10.193 13.6017 10.1567 13.5224 10.1394 13.438C10.1222 13.3537 10.1245 13.2665 10.1461 13.1831C10.3708 12.3035 11.1237 11.4287 12.1805 11.1628C12.2633 11.1426 12.3497 11.1416 12.433 11.1598C12.5164 11.1779 12.5945 11.2148 12.6614 11.2677C12.7284 11.3205 12.7825 11.3878 12.8196 11.4647C12.8566 11.5415 12.8758 11.6257 12.8755 11.711V11.7288Z"
        fill="#7C8497"
      />
    </svg>
  );
}
