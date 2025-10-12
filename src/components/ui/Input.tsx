import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={"w-full px-4 py-3 rounded-md focus:outline-none"}
    />
  );
}
