import React from "react";
import { ButtonHTMLAttributes } from "react";

interface HomeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
}

const HomeButton = ({ icon, label, bgColor }: HomeButtonProps) => (
  <div
    className={`flex flex-col items-center justify-center p-4 rounded-xl text-white font-bold text-center uppercase w-40 h-40 ${bgColor}`}
  >
    {icon}
    <p className="mt-2 text-sm">{label}</p>
  </div>
);

export default HomeButton;
