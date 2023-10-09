import React from "react";

export default function Divider({ className, ...props }) {
  return (
    <div {...props} className={`border border-[#4A5161] mb-0  ${className}`} />
  );
}
