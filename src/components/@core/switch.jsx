import useDisclose from "@/helper/useDisclose";
import React from "react";

export default function Switch(props) {
  const { isOpen: isChecked, toggle: toggleChecked } = useDisclose(
    props?.isChecked || false
  );
  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleChecked}
        class="sr-only peer"
      />
      <div class="w-11 h-6 peer-focus:outline-none  peer-focus:ring-0 rounded-full peer bg-[#4E5668] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#32C751]"></div>
    </label>
  );
}
