import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`w-full bg-[#255391] text-white text-base font-bold py-4 mt-1 rounded-lg transition-colors hover:bg-opacity-90 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
Button.displayName = "Button";

export default Button;
