"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#13171B] text-white px-6 md:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="space-y-5 md:w-1/3">
          {/* Logo */}
          <Image
            src="/images/logo-edgeup.png"
            alt="Logo EdgeUp"
            width={152}
            height={36}
            className="mb-10"
          />

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="#">
              <Image
                src="/images/icon-linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src="/images/icon-instagram.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image src="/images/icon-x.png" alt="X" width={20} height={20} />
            </a>
            <a href="#">
              <Image
                src="/images/icon-mail.png"
                alt="Mail"
                width={20}
                height={20}
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/80">
            © 2025 EdgeUp. All rights reserved.
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-sm md:grid-cols-4 md:gap-x-14">
          {/* Tentang EdgeUp */}
          <div className="order-1 md:order-1">
            <h4 className="font-semibold mb-3">Tentang EdgeUp</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#">Tentang Kami</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Bantuan */}
          <div className="order-2 md:order-3">
            <h4 className="font-semibold mb-3">Bantuan</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Fitur */}
          <div className="order-3 md:order-2">
            <h4 className="font-semibold mb-3">Fitur</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#">Certificates & Training</a>
              </li>
              <li>
                <a href="#">Job Trends & Tracker</a>
              </li>
              <li>
                <a href="#">Career Stories</a>
              </li>
              <li>
                <a href="#">Career Roadmap</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="order-4 md:order-4">
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
