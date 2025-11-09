"use client";
import { CalendarIcon, ClockIcon, HeartIcon } from "@phosphor-icons/react";
import { useParams } from "next/navigation";
import { Event, getEventById } from "@/app/events";

export default function EventsPage() {
  const params = useParams();
  const event: Event = getEventById(Number(params.id));

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
        {
          <>
            <div
              key={event.id}
              className="bg-[#F5B041] rounded-t-2xl mt-4 text-white flex items-center w-full p-4 gap-4 text-base font-black"
            >
              <div className="flex items-center justify-center p-3 rounded-lg">
                {event.emoji}
              </div>

              <div className="flex flex-col flex-1 justify-center text-left">
                <h3 className="font-black uppercase">{event.title}</h3>
                <p className="text-sm">
                  {event.Date} | {event.Local}
                </p>
              </div>
            </div>

            <div className="bg-[#F5B041] rounded-b-2xl text-white flex flex-col items-center justify-between w-full p-6 gap-6 text-base font-bold">
              <p className="text-center leading-relaxed text-white font-semibold">
                {event.description}
              </p>

              <div className="flex gap-2 justify-center w-full">
                <button className="bg-[#255391] px-5 py-2 rounded-full flex items-center gap-2 text-white font-bold shadow-md">
                  Favoritar <HeartIcon size={20} />
                </button>

                <button className="bg-[#255391] px-5 py-2 rounded-full flex items-center gap-2 text-white font-bold shadow-md">
                  Ativar Lembrete <ClockIcon size={20} />
                </button>
              </div>

              <button className="bg-[#255391] px-8 py-3 rounded-full text-white font-extrabold mt-2 shadow-md">
                Como Chegar
              </button>
            </div>
          </>
        }
      </div>
    </main>
  );
}
