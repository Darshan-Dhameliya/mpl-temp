import React from "react";

// Define button variants as objects
const buttonVariants = {
  primary:
    "px-8 font-semibold border py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white",
  secondary:
    "px-8 font-semibold bg-green-600 py-2 rounded-md bg-gray-500 hover:bg-green-700 text-white",
};

export default function Button({
  variant,
  className,
  children,
  isloading,
  ...props
}) {
  const selectedVariant = buttonVariants[variant] || buttonVariants.primary;

  return (
    <button
      disabled={isloading}
      {...props}
      className={`${selectedVariant}
      disabled:opacity-90 disabled:pointer-events-none  border border-white ${className}`}
    >
      {isloading ? (
        <span class="w-2 h-2 rounded-full block bg-slate-400 animate-bounce" />
      ) : (
        children
      )}
    </button>
  );
}
