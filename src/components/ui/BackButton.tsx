"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";
import React from "react";
import { usePathname } from "next/navigation";

type BackButtonProps = {
  href?: string;
  className?: string;
  children?: React.ReactNode | null;
};

export default function BackButton({
  href = "/",
  className = "",
  children = null,
}: BackButtonProps) {
  const pathname = usePathname();

  // Don't render on the root (initial) page
  if (!pathname || pathname === "/") return null;

  return (
    <Link
      href={href}
      aria-label="Voltar"
      className={
        "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-transparent p-2 rounded-full text-white flex items-center justify-center " +
        className
      }
    >
      Voltar
      {children}
      <ArrowRightIcon size={24} weight="bold" />
    </Link>
  );
}
