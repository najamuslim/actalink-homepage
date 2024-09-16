"use client";
import { FC, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  isTransparent?: boolean;
}

const ArrowButton: FC<ButtonProps> = ({
  label,
  backgroundColor = "",
  isTransparent = false,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: isTransparent ? "transparent" : backgroundColor,
        zIndex: 10,
      }} // Apply backgroundColor directly
      className={`
        ${isTransparent ? "text-black" : "text-black"} 
        px-6 py-2 rounded-md font-semibold flex items-center justify-center 
        transition-all duration-300 ease-in-out
        ${
          !isTransparent &&
          (hover
            ? "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            : "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]")
        }
      `}
    >
      {label}
      <span className="ml-2">
        {hover ? (
          <ArrowRight className="w-5 h-5 transition-transform duration-300" />
        ) : (
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300" />
        )}
      </span>
    </button>
  );
};

export default ArrowButton;
