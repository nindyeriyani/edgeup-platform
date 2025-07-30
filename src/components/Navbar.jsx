"use client";

import { Menu } from "lucide-react"; // Importing Menu icon from lucide-react
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ active }) {
  return (
    <nav className="bg-[#0E4C52] text-gray-400 px-[120px] py-[26px] flex justify-between items-center gap-[40px] fixed top-0 left-0 w-full z-50 shadow">
      {/* Logo */}
      <Link href="/">
        <Image
        src="/images/logo-edgeup.png"
        alt="Logo EdgeUp"
        width={152}
        height={36}
        className="cursor-pointer"
        />
      </Link>
      

      {/* Navigation Links */}
      <ul className="flex items-center gap-[70px] text-[16px]">
        <li
          className={`${
            active === "certifications"
              ? "text-white"
              : "text-[#ACB7C6] hover:text-white"
          }`}
        >
          <Link href="/certifications">Certification & Training</Link>
        </li>

        <li
          className={`${
            active === "job-trends"
              ? "text-white"
              : "text-[#ACB7C6] hover:text-white"
          }`}
        > <Link href="/job-trends">Job Trends Tracker</ Link>
          
        </li>
        <li
          className={`${
            active === "stories"
              ? "text-white"
              : "text-[#ACB7C6] hover:text-white"
          }`}
        ><Link href="/stories">Career Stories</Link>
        </li>
        <li
          className={`${
            active === "roadmap"
              ? "text-white"
              : "text-[#ACB7C6] hover:text-white"
          }`}
        ><Link href="/roadmap"> Career Roadmap</Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="p-2 border rounded-sm text-white">
        <Menu size={24} />
      </div>
    </nav>
  );
}
