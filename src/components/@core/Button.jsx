import React from "react";

// Define button variants as objects
const buttonVariants = {
  primary:
    "px-8 font-semibold border py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white",
  secondary:
    "px-8 font-semibold bg-green-600 py-2 rounded-md bg-gray-500 hover:bg-green-700 text-white",
};

export default function Button(props) {
  const { variant, className, children } = props;

  const selectedVariant = buttonVariants[variant] || buttonVariants.primary;

  return (
    <button
      {...props}
      className={`${selectedVariant} border border-white ${className}`}
    >
      {children}
    </button>
  );
}
