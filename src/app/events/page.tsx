"use client";

import {
  ArrowRightIcon,
  CalendarIcon,
  CheckerboardIcon,
  PersonSimpleIcon,
  PersonSimpleRunIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="flex text-white font-black justify-between items-center gap-4 p-8 w-full text-4xl">
        <div>
          Eventos
          <br />
          Próximos
        </div>
        <CalendarIcon className="text-white" size={64} />
      </header>

      <div className="bg-[#255391] w-full flex-grow rounded-t-3xl p-4 ">
        <button className="flex text-white justify-center items-center gap-2 mb-4 p-4 bg-[#F5B041] rounded-lg w-full text-xl uppercase font-black  ">
          Achar eventos próximos
          <ArrowRightIcon className="text-white" size={32} />
        </button>
        <div className="bg-[#F5B041] rounded-lg mt-4 text-white">
          <PersonSimpleRunIcon className="text-white" size={128} />
          <h3>Caminhada no parque</h3>
          <p>Data: 25/12/2024</p>
          <p>Local: Parque Central</p>
          <Link href="#">Ver detalhes</Link>
        </div>

        <div className="bg-[#F5B041] rounded-lg mt-4 text-white">
          <PersonSimpleIcon className="text-white" size={128} />
          <h3>Caminhada no parque</h3>
          <p>Data: 25/12/2024</p>
          <p>Local: Parque Central</p>
          <Link href="#">Ver detalhes</Link>
        </div>

        <div className="bg-[#F5B041] rounded-lg mt-4 text-white">
          <CheckerboardIcon className="text-white" size={128} />
          <h3>Caminhada no parque</h3>
          <p>Data: 25/12/2024</p>
          <p>Local: Parque Central</p>
          <Link href="#">Ver detalhes</Link>
        </div>
      </div>
    </main>
  );
}
