"use client";

import { ChatsCircleIcon } from "@phosphor-icons/react";
import React from "react";

export default function HelpPage() {
  return (
    <main className="flex flex-col min-h-screen font-sans bg-orange-500">
      <div className="pt-12 pb-8">
        <h1 className="text-2xl text-center font-black flex gap-2 justify-center items-center text-[#274941]">
          Ajuda para acessar
          <ChatsCircleIcon size={48} weight="bold" className="text-[#274941]" />
        </h1>
      </div>

      <div className="flex-grow px-4 pb-4 flex flex-col">
        <div className="w-full flex-grow flex flex-col rounded-xl overflow-hidden">
          <h3 className="bg-[#255391] text-white font-bold text-xl text-center p-4">
            Tutorial das funcionalidades do aplicativo
          </h3>
          <div className="bg-[#F39C12] p-6 text-white flex-grow space-y-4 font-bold">
            <div>
              <p className="font-bold uppercase text-2xl mb-2">
                Faça seu login
              </p>
              <p>
                Assim que acessar você verá a tela de entrada. Digite seu email
                e a senha. Depois toque no botão azul &quot;Entrar&quot;.
              </p>
            </div>
            <div>
              <p className="font-bold uppercase text-2xl mb-2">
                Esqueceu a senha?
              </p>
              <p>
                Se você não lembra sua senha, toque no botão &quot;Esqueci minha
                senha&quot; e siga as instruções para redefini-la.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
