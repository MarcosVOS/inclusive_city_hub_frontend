"use client";

import {
  ArrowRightIcon,
  CalendarIcon,
  CheckerboardIcon,
  HorseIcon,
  PersonSimpleBikeIcon,
  PersonSimpleIcon,
  PersonSimpleRunIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Esporte ao ar livre",
    emoji: (
      <PersonSimpleRunIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
  },
  {
    title: "Yoga",
    emoji: (
      <PersonSimpleIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
  },
  {
    title: "Ciclismo em grupo",
    emoji: (
      <PersonSimpleBikeIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
  },
  {
    title: "Lazer",
    emoji: (
      <CheckerboardIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
  },
];

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
        {/* <button className="flex text-white justify-center items-center gap-2 mb-4 p-4 bg-[#F5B041] rounded-lg w-full text-xl uppercase font-black  ">
          Achar eventos próximos
          <ArrowRightIcon className="text-white" size={32} />
        </button> */}

        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#F5B041] rounded-lg mt-4 text-white flex content-between w-full p-2 justify-between text-lg font-black"
          >
            {event.emoji}
            <h3 className="flex items-center">{event.title}</h3>
            <Link className="flex items-end" href="#">
              Ver detalhes
              <ArrowRightIcon className="text-white" size={24} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
