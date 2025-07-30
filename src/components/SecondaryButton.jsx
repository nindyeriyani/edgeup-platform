"use client";

import { useRouter } from "next/navigation";

export default function SecondaryButton({
  children,
  leftIcon,
  rightIcon,
  showLeftIcon ,
  showRightIcon ,
  onClick,
  href = "/career-roadmap", // default route
}) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick(); 
    router.push(href); 
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-3 w-full border border-[#0BB0BF] rounded-lg px-4 py-2 h-[38px] bg-white text-[#0BB0BF] font-medium transition duration-300 ease-out hover:bg-[#E6FAFC]"
    >
      {showLeftIcon && leftIcon && <span>{leftIcon}</span>}
      <span className="font-semibold text-[16px] leading-[140%] text-[#13171B] whitespace-nowrap " >{children}</span>
      {showRightIcon && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
