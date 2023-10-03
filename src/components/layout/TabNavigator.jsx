import { useState } from "react";

// Define your component here...

export default function MyTabNavigator() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="lap:hidden h-11 fixed bottom-0 left-0 w-full bg-gray-800">
      <nav className="flex justify-center">
        <a
          href="#"
          className={`${
            activeTab === "tab1" ? "bg-gray-900" : "bg-gray-800"
          } px-4 py-2 text-white text-center flex-1`}
          onClick={() => setActiveTab("tab1")}
        >
          Tab 1
        </a>
        <a
          href="#"
          className={`${
            activeTab === "tab2" ? "bg-gray-900" : "bg-gray-800"
          } px-4 py-2 text-white text-center flex-1`}
          onClick={() => setActiveTab("tab2")}
        >
          Tab 2
        </a>
        <a
          href="#"
          className={`${
            activeTab === "tab3" ? "bg-gray-900" : "bg-gray-800"
          } px-4 py-2 text-white text-center flex-1`}
          onClick={() => setActiveTab("tab3")}
        >
          Tab 3
        </a>
      </nav>
    </div>
  );
}
