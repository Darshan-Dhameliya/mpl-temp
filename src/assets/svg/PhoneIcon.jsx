import React from "react";

export default function PhoneIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="30"
      viewBox="0 0 21 30"
      fill="none"
      {...props}
    >
      <path
        d="M17.4811 30H2.82156C2.45757 29.8722 2.06673 29.7909 1.73706 29.6065C0.642105 28.9938 0.152809 28.0427 0.1543 26.8143C0.160267 18.9386 0.160267 11.0624 0.1543 3.18571C0.1543 3.07826 0.157283 2.97081 0.16325 2.86337C0.224413 1.81211 0.710726 0.993175 1.63263 0.455931C1.99364 0.246842 2.42177 0.148105 2.82604 0H17.4855C17.8406 0.121969 18.2225 0.198925 18.5447 0.377523C19.6665 0.996079 20.1558 1.96312 20.1543 3.21475C20.1453 11.0711 20.1453 18.9279 20.1543 26.7852C20.1543 26.9029 20.1543 27.019 20.1453 27.1366C20.119 27.7445 19.9024 28.3301 19.5246 28.8148C19.1468 29.2996 18.6259 29.6604 18.0315 29.849C17.8436 29.9056 17.666 29.9506 17.4811 30ZM17.0514 20.9801V3.01147H3.25119V20.9801H17.0514ZM10.17 24.0061C9.9089 24.0061 9.64934 23.9988 9.38828 24.0061C8.58273 24.0322 7.8637 24.7321 7.85177 25.4842C7.8416 25.8697 7.98716 26.2436 8.25717 26.5257C8.52718 26.8078 8.90009 26.9755 9.29579 26.9929C9.87564 27.0241 10.4568 27.0241 11.0367 26.9929C11.9183 26.945 12.4628 26.3467 12.4509 25.4886C12.4526 25.1036 12.2998 24.7332 12.0251 24.4563C11.7503 24.1794 11.3753 24.0178 10.98 24.0061C10.71 24.0061 10.44 24.0061 10.17 24.0061Z"
        fill={props?.color || "#8D93A9"}
      />
    </svg>
  );
}
