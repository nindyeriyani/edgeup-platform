import { Menu } from "lucide-react"; // Importing Menu icon from lucide-react

export default function Navbar() {
  return (
    <nav className="bg-[#0E4C52] text-[#ACB7C6] px-[120px] py-[26px] flex justify-between items-center gap-[40px]">
      {/* Logo */}
      <img
        src="/images/logo-edgeup.png"
        alt="Logo EdgeUp"
        className="w-[152px] h-[36px]"
      />

      {/* Navigation Links */}
      <ul className="flex items-center gap-[70px] text-[16px]">
        <li className="hover:text-[#fff] cursor-pointer">
          Certification & Training
        </li>
        <li className="hover:text-[#fff] cursor-pointer">Job Trends Tracker</li>
        <li className="hover:text-[#fff] cursor-pointer">Career Stories</li>
        <li className="hover:text-[#fff] cursor-pointer">Career Roadmap</li>
      </ul>

      {/* Hamburger Menu */}
      <div className="p-2 border rounded-sm text-white">
        <Menu size={24} />
      </div>
    </nav>
  );
}
