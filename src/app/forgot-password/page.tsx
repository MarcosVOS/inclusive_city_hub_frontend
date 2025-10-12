"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 font-sans bg-brand-orange">
      <div className="w-full max-w-xs mx-auto bg-[#F5B041] p-4 rounded-lg">
        <h1 className="text-2xl text-center text-[#274941] font-black mb-8 uppercase">
          esqueci minha senha
        </h1>
        <h2 className="text-white mb-8 text-center text-xl font-bold text-2xl uppercase">
          Informe o e-mail para o qual deseja redefinir a sua senha
        </h2>

        <form className="flex flex-col gap-5">
          <Input type="email" placeholder="E-mail" />
        </form>

        <Button className="mt-10">Próximo</Button>

        <Link
          href="/"
          className="block mb-2 font-bold text-xl flex gap-2 justify-center align-middle underline text-white mt-4"
        >
          Cancelar
        </Link>
      </div>
    </main>
  );
}
