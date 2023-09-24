import React from "react";

export default function Divider(props) {
  const { className } = props;
  return (
    <div
      {...props}
      className={`border border-[#4A5161] mb-2 mx-2 ${className}`}
    />
  );
}
