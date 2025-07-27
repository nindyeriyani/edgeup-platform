"use client";

import { Menu } from "lucide-react"; // Importing Menu icon from lucide-react

export default function Navbar({ active }) {
  return (
    <nav className="bg-[#0E4C52] text-gray-400 px-[120px] py-[26px] flex justify-between items-center gap-[40px] fixed top-0 left-0 w-full z-50 shadow">
      {/* Logo */}
      <img
        src="/images/logo-edgeup.png"
        alt="Logo EdgeUp"
        className="w-[152px] h-[36px]"
      />

      {/* Navigation Links */}
      <ul className="flex items-center gap-[70px] text-[16px]">
        <li
          className={`${
            active === "certifications"
              ? "text-white"
              : "text-[#ACB7C6] hover:text-white"
          }`}
        >
          Certification & Training
        </li>
        <li className="hover:text-[#fff] cursor-pointer">Job Trends Tracker</li>
        <li 
          className={`${
            active === "stories"
              ? "text-white"
              : "text-[#ACB7C6] hover:text-white"
          }`}
        > Career Stories
        </li>
        <li className="hover:text-[#fff] cursor-pointer">Career Roadmap</li>
      </ul>

      {/* Hamburger Menu */}
      <div className="p-2 border rounded-sm text-white">
        <Menu size={24} />
      </div>
    </nav>
  );
}
