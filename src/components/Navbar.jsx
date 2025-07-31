"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ active }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#0E4C52] text-gray-400 px-6 md:px-10 lg:px-[120px] py-[20px] flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow">
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

        {/* Navigation Links - Desktop only */}
        <ul className="hidden xl:flex items-center gap-10 lg:gap-[70px] text-[16px]">
          <li
            className={`cursor-pointer ${
              active === "certifications"
                ? "text-white"
                : "text-[#ACB7C6] hover:text-white"
            }`}
          >
            <Link href="/certifications">Certification & Training</Link>
          </li>
          <li
            className={`cursor-pointer ${
              active === "job-trends"
                ? "text-white"
                : "text-[#ACB7C6] hover:text-white"
            }`}
          >
            <Link href="/job-trends">Job Trends Tracker</Link>
          </li>
          <li
            className={`cursor-pointer ${
              active === "stories"
                ? "text-white"
                : "text-[#ACB7C6] hover:text-white"
            }`}
          >
            <Link href="/stories">Career Stories</Link>
          </li>
          <li
            className={`cursor-pointer ${
              active === "roadmap"
                ? "text-white"
                : "text-[#ACB7C6] hover:text-white"
            }`}
          >
            <Link href="/roadmap">Career Roadmap</Link>
          </li>
        </ul>

        {/* Hamburger Menu - Always visible */}
        <div className="p-2 rounded-sm border text-white cursor-pointer">
          <Menu
            size={24}
            onClick={() => window.innerWidth < 768 && setIsMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Modal Menu - Mobile & Tablet only */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end md:hidden">
          <div className="w-2/3 max-w-sm bg-white h-full shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#0E4C52]">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-black cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 text-[16px] text-[#0E4C52]">
              <li>
                <Link
                  href="/certifications"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Certification & Training
                </Link>
              </li>
              <li>
                <Link href="/job-trends" onClick={() => setIsMenuOpen(false)}>
                  Job Trends Tracker
                </Link>
              </li>
              <li>
                <Link href="/stories" onClick={() => setIsMenuOpen(false)}>
                  Career Stories
                </Link>
              </li>
              <li>
                <Link href="/roadmap" onClick={() => setIsMenuOpen(false)}>
                  Career Roadmap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
