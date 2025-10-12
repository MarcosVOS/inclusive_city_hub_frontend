"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import React from "react";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 font-sans bg-brand-orange">
      <div className="w-full max-w-xs mx-auto">
        <h1 className="text-5xl text-center text-white font-black mb-16">
          Cidades
          <br />
          inclusivas
        </h1>

        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-6 py-4 font-bold rounded-lg focus:outline-none  bg-[#F8C963] placeholder:text-[#255391] text-xl"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full px-6 py-4 font-bold rounded-lg focus:outline-none  bg-[#F8C963] placeholder:text-[#255391] text-xl"
          />
        </form>

        <div className="mt-3">
          <a
            href="#"
            className="text-sm font-bold text-white underline text-xl"
          >
            Esqueci minha senha
          </a>
        </div>

        <button className="w-full bg-[#255391] text-white text-base font-bold py-4 mt-1 rounded-lg  transition-colors">
          ENTRAR
        </button>

        <div className="mt-8 text-center text-white font-semibold">
          <a
            href="#"
            className="block mb-2 font-bold text-xl flex gap-2 justify-center align-middle"
          >
            Criar conta
            <ArrowRightIcon size={24} weight="bold" />
          </a>

          <a
            href="#"
            className="block mb-2 font-bold text-xl flex gap-2 justify-center align-middle"
          >
            Ajuda para
            <ArrowRightIcon size={24} weight="bold" />
          </a>
        </div>
      </div>
    </main>
  );
}
