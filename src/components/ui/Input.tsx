import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-6 py-4 font-bold rounded-lg focus:outline-none bg-[#F8C963] placeholder:text-[#255391] text-xl ${
          className || ""
        }`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
