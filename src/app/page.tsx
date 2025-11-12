"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 font-sans bg-brand-orange">
      <div className="w-full max-w-xs mx-auto">
        <h1 className="text-5xl text-center text-white font-black mb-16 uppercase flex flex-col items-center">
          <Image
            src="/viva_sp.png"
            alt="Inclusive City"
            width={200}
            height={200}
          />
          Cidades
          <br />
          inclusivas
        </h1>

        <Button
          className="mt-10 uppercase"
          onClick={() => {
            redirect("/home");
          }}
        >
          convidado
        </Button>
        <Button
          className="mt-10 uppercase"
          onClick={() => {
            redirect("/auth/users");
          }}
        >
          usuário
        </Button>
        <Button
          className="mt-10 uppercase"
          onClick={() => {
            redirect("/auth/enterprise");
          }}
        >
          empresa
        </Button>
      </div>
    </main>
  );
}
