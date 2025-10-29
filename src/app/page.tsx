"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 font-sans bg-brand-orange">
      <div className="w-full max-w-xs mx-auto">
        {/* <h1 className="text-5xl text-center text-white font-black mb-16">
          Cidades
          <br />
          inclusivas
        </h1> */}

        <Button
          className="mt-10"
          onClick={() => {
            redirect("/home");
          }}
        >
          Entrar como convidado
        </Button>
        <Button
          className="mt-10"
          onClick={() => {
            redirect("/auth/users");
          }}
        >
          Entrar como usuário
        </Button>
        <Button
          className="mt-10"
          onClick={() => {
            redirect("/auth/enterprise");
          }}
        >
          Entrar como empresa
        </Button>
      </div>
    </main>
  );
}
