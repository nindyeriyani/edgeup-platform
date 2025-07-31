"use client";

import { useRouter } from "next/navigation";

export default function SecondaryButton({
  children,
  leftIcon,
  rightIcon,
  showLeftIcon ,
  showRightIcon ,
  onClick,
  href, 
  noActive = false,
  noHover = false,
  small = false,
  large = false
}) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    if (href) router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-3  bg-white w-full rounded-lg 
      ${small ? "px-4 py-2 h-[38px]" : "px-6 py-3 h-[48px]"}
      ${large ? "px-6 py-3 h-[48px]" : "px-4 py-2 h-[38px]"}
      font-semibold text-[16px] leading-[140%] text-[#13171B] icon-[#0BB0BF]
      border border-[#0BB0BF]
      ${!noHover ? "hover:bg-[#E7FDFF]" : ""}
      ${!noActive ? "active:bg-white active:border-[#066973]" : ""}
      transition duration-300 ease-out
      `}
    >
      {showLeftIcon && leftIcon && <span>{leftIcon}</span>}
      <span className="whitespace-nowrap " >{children}</span>
      {showRightIcon && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
