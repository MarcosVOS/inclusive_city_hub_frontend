"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 font-sans bg-brand-orange">
      <div className="w-full max-w-xs mx-auto">
        <h1 className="text-5xl text-center text-white font-black mb-16 flex flex-col items-center">
          <Image
            src="/viva_sp.png"
            alt="Inclusive City"
            width={200}
            height={200}
          />
          Cidades
          <br />
          inclusivas <br />
          para empresas
        </h1>

        <form className="flex flex-col gap-5">
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
        </form>

        <div className="mt-3">
          <Link
            href="/forgot-password"
            className="text-sm font-bold text-white underline text-xl"
          >
            Esqueci minha senha
          </Link>
        </div>

        <Button
          className="mt-10"
          onClick={() => {
            redirect("/home");
          }}
        >
          Entrar
        </Button>

        <div className="mt-8 text-center text-white font-semibold">
          <Link
            href="/signup"
            className="block mb-2 font-bold text-xl flex gap-2 justify-center align-middle"
          >
            Criar conta
            <ArrowRightIcon size={24} weight="bold" />
          </Link>

          <Link
            href="/help"
            className="block mb-2 font-bold text-xl flex gap-2 justify-center align-middle"
          >
            Ajuda para acessar
            <ArrowRightIcon size={24} weight="bold" />
          </Link>
        </div>
      </div>
    </main>
  );
}
