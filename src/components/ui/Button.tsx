import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={"rounded-md font-semibold px-4 py-2 focus:outline-none"}
    />
  );
}
