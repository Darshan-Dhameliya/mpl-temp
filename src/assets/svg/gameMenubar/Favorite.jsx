import React from "react";

export default function Favorite(props) {
  if (props?.active) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        {...props}
      >
        <path
          d="M8.24656e-08 6.23905V5.45775C6.84021e-05 5.42744 0.00406103 5.39727 0.0118797 5.36797C0.019784 5.33987 0.0256527 5.31124 0.0294409 5.2823C0.140333 4.01611 0.673249 2.82283 1.54383 1.89134C3.59694 -0.348433 7.07974 -0.617247 9.45928 1.27728C9.56258 1.3609 9.66588 1.44811 9.76918 1.53737C9.83526 1.59476 9.9204 1.62579 10.0082 1.62446C10.0959 1.62313 10.1801 1.58955 10.2444 1.53019H10.247C10.6495 1.15134 11.111 0.83953 11.6136 0.60678C13.8346 -0.391012 15.9337 -0.162726 17.8453 1.32499C19.1396 2.33355 19.8359 3.7043 19.9774 5.34027C20.0869 6.6038 19.7899 7.7914 19.2744 8.93386C18.573 10.4893 17.5271 11.8067 16.3479 13.0225C14.4957 14.935 12.3708 16.5109 10.1359 17.9499C10.0445 18.0089 9.97837 18.0217 9.87765 17.9561C8.40096 16.9962 6.95991 15.9877 5.61751 14.8452C4.18369 13.6258 2.85163 12.3105 1.77523 10.7596C1.03818 9.69875 0.455558 8.56552 0.174579 7.29481C0.101752 6.96546 0.0593982 6.62791 0.00464863 6.29497C0.00154182 6.27649 -1.30479e-05 6.25779 8.24656e-08 6.23905Z"
          fill="url(#paint0_linear_376_77)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_376_77"
            x1="10"
            y1="0"
            x2="10"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F85341" />
            <stop offset="1" stop-color="#FE2073" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      {...props}
    >
      <path
        d="M8.24656e-08 6.23905V5.45775C6.84021e-05 5.42744 0.00406103 5.39727 0.0118797 5.36797C0.019784 5.33987 0.0256527 5.31124 0.0294409 5.2823C0.140333 4.01611 0.673249 2.82283 1.54383 1.89134C3.59694 -0.348433 7.07974 -0.617247 9.45928 1.27728C9.56258 1.3609 9.66588 1.44811 9.76918 1.53737C9.83526 1.59476 9.9204 1.62579 10.0082 1.62446C10.0959 1.62313 10.1801 1.58955 10.2444 1.53019H10.247C10.6495 1.15134 11.111 0.83953 11.6136 0.60678C13.8346 -0.391012 15.9337 -0.162726 17.8453 1.32499C19.1396 2.33355 19.8359 3.7043 19.9774 5.34027C20.0869 6.6038 19.7899 7.7914 19.2744 8.93386C18.573 10.4893 17.5271 11.8067 16.3479 13.0225C14.4957 14.935 12.3708 16.5109 10.1359 17.9499C10.0445 18.0089 9.97837 18.0217 9.87765 17.9561C8.40096 16.9962 6.95991 15.9877 5.61751 14.8452C4.18369 13.6258 2.85163 12.3105 1.77523 10.7596C1.03818 9.69875 0.455558 8.56552 0.174579 7.29481C0.101752 6.96546 0.0593982 6.62791 0.00464863 6.29497C0.00154182 6.27649 -1.30479e-05 6.25779 8.24656e-08 6.23905Z"
        fill="#7C8497"
      />
    </svg>
  );
}
