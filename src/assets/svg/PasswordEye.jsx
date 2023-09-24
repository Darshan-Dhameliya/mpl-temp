import React from "react";

export default function PasswordEye(props) {
  const { isOpen, size } = props;
  if (isOpen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 35 22"
        fill="none"
        {...props}
      >
        <path
          d="M17.399 -0.000465393C14.6509 0.028326 12.1387 0.793558 9.76104 2.02778C6.50576 3.71605 3.74662 6.03666 1.28149 8.72715C0.952029 9.08485 0.635305 9.45694 0.327995 9.83457C-0.100578 10.3634 -0.114975 11.0162 0.319136 11.5328C3.22723 14.993 6.59159 17.8889 10.7223 19.8125C12.8873 20.8208 15.1636 21.4033 17.5667 21.3739C19.997 21.344 22.2794 20.689 24.4571 19.6447C27.322 18.2709 29.8154 16.3778 32.069 14.1596C32.8824 13.3601 33.6416 12.504 34.3979 11.6496C34.9583 11.0167 34.9516 10.3844 34.4057 9.73546C31.7551 6.59259 28.698 3.93477 25.0341 2.02225C22.6321 0.768087 20.09 0.00894737 17.399 -0.000465393ZM17.4073 16.0362C15.9854 16.0369 14.6214 15.4728 13.6154 14.4679C12.6094 13.4631 12.0438 12.0998 12.0429 10.6779C12.0429 7.7432 14.4571 5.33732 17.4006 5.33898C18.1076 5.33136 18.809 5.46397 19.4644 5.72914C20.1198 5.9943 20.7161 6.38676 21.2189 6.88383C21.7216 7.38089 22.1208 7.97269 22.3935 8.62501C22.6661 9.27733 22.8067 9.97722 22.8071 10.6842C22.8076 11.3912 22.6678 12.0913 22.396 12.7439C22.1242 13.3966 21.7257 13.9889 21.2236 14.4866C20.7214 14.9843 20.1256 15.3775 19.4706 15.6434C18.8155 15.9094 18.1142 16.0429 17.4073 16.0362Z"
          fill="#51586A"
        />
        <path
          d="M20.0715 10.6616C20.067 10.3108 19.9934 9.9643 19.855 9.64191C19.7166 9.31953 19.5161 9.02757 19.2648 8.7827C19.0136 8.53782 18.7165 8.34484 18.3907 8.21475C18.0649 8.08467 17.7166 8.02003 17.3658 8.02454C17.015 8.02905 16.6685 8.10261 16.3461 8.24103C16.0237 8.37944 15.7318 8.58 15.4869 8.83125C14.9923 9.33867 14.7196 10.0218 14.7287 10.7303C14.7442 12.1788 15.9619 13.3654 17.4231 13.3554C17.7741 13.3531 18.1211 13.2815 18.4444 13.1447C18.7676 13.008 19.0607 12.8088 19.3067 12.5585C19.5528 12.3082 19.747 12.0118 19.8782 11.6863C20.0095 11.3608 20.0752 11.0126 20.0715 10.6616Z"
          fill="#51586A"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 35 25"
      fill="none"
      {...props}
    >
      <path
        d="M6.96927 -5.34058e-05L5.10437 1.79508L27.8536 24.5078L29.6809 22.695L26.8935 19.922C27.0253 19.8306 27.1106 19.768 27.1992 19.7099C29.9129 17.9242 32.3457 15.7443 34.4174 13.242C34.9511 12.6008 34.955 11.9867 34.414 11.3488C31.6089 8.03985 28.3786 5.25136 24.4472 3.34271C22.1022 2.20428 19.6343 1.54646 17.0037 1.62343C14.7667 1.68877 12.6576 2.27958 10.6409 3.22145C10.4078 3.33219 10.2788 3.30616 10.1005 3.12399C9.13928 2.14447 8.16252 1.18046 7.19187 0.209251C7.13259 0.142675 7.07713 0.072794 7.02575 -5.34058e-05H6.96927ZM14.6731 7.74085C16.492 6.55369 19.5801 6.56476 21.5236 8.88703C22.9478 10.5886 23.198 13.8743 21.9804 14.9779C21.3835 14.3799 20.7899 13.7763 20.1842 13.1849C20.1191 13.13 20.0707 13.058 20.0445 12.9769C20.0184 12.8958 20.0156 12.8091 20.0363 12.7265C20.3243 11.1024 19.0109 9.53432 17.3697 9.65614C16.7932 9.69877 16.4715 9.51605 16.136 9.14285C15.8475 8.82169 15.5308 8.52435 15.219 8.22368C15.0485 8.05702 14.863 7.90696 14.6731 7.74085Z"
        fill="#51586A"
      />
      <path
        d="M5.66208 6.26626C5.13107 6.70923 4.60117 7.13503 4.08898 7.58132C2.77201 8.72178 1.54983 9.96729 0.434479 11.3056C-0.140829 12.0011 -0.149134 12.5952 0.434479 13.2862C3.10503 16.4385 6.17758 19.1041 9.86642 21.0111C12.0763 22.1539 14.4141 22.8793 16.9179 22.9767C18.5182 23.0388 20.078 22.7962 21.6107 22.3544C21.6489 22.3388 21.686 22.3203 21.7214 22.299C21.666 22.2359 21.6179 22.18 21.5669 22.1285C20.1199 20.6836 18.6714 19.2403 17.2214 17.7984C17.1253 17.7054 17.0026 17.6448 16.8703 17.6251C14.341 17.3449 12.3974 15.428 12.0763 12.9031C12.0496 12.7273 11.9696 12.564 11.847 12.4352C9.86697 10.4429 7.88025 8.45619 5.88688 6.47501C5.82265 6.41077 5.75399 6.35153 5.66208 6.26626Z"
        fill="#51586A"
      />
    </svg>
  );
}
