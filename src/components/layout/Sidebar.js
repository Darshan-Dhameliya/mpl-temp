// components/Sidebar.js
import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <aside
      className={`w-64 bg-darkSecondary mt-16  sidebar-sahdow text-white h-full fixed top-0 left-0 overflow-y-auto transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button
          className="text-white focus:outline-none ml-auto"
          onClick={closeSidebar}
        >
          Close
        </button>
      </div>
      <nav className="space-y-2 p-4">
        <Link href="/affiliate" passHref>
          <span className="block hover:text-blue-500">Affiliate</span>
        </Link>
        <Link href="/vip-club" passHref>
          <span className="block hover:text-blue-500">VIP Club</span>
        </Link>
        {/* Add other links similarly */}
      </nav>
    </aside>
  );
};

export default Sidebar;
