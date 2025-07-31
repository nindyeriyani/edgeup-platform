"use client";

import { useRouter } from "next/navigation";

export default function PrimaryButton({
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
      className={`flex items-center justify-center gap-3 w-full rounded-lg
        ${small ? "px-4 py-2 h-[38px]" : "px-6 py-3 h-[48px]"}
        ${large ? "px-6 py-3 h-[48px]" : "px-4 py-2 h-[38px]"}
        font-medium text-white text-[16px] leading-[140%]
        border border-[#E7FDFF]
        bg-[linear-gradient(180deg,_#0BB0BF_24%,_#088C99_100%)]
        ${!noHover ? "hover:bg-[linear-gradient(180deg,_#088C99_24%,_#066d76_100%)]" : ""}
        ${!noActive ? "active:bg-[linear-gradient(180deg,_#0BB0BF_24%,_#088C99_100%)] active:border-[#066973]" : ""}
        transition duration-300 ease-out`}
    >
      {showLeftIcon && leftIcon && <span>{leftIcon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {showRightIcon && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
