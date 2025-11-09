"use client";
import { ArrowRightIcon, HeartIcon, StarIcon } from "@phosphor-icons/react";
import { useParams } from "next/navigation";
import { Event, getEventById } from "@/app/events";

export default function EventsPage() {
  const params = useParams();
  const event: Event = getEventById(Number(params.id))!;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="flex text-white font-black justify-between items-center gap-4 p-8 w-full text-4xl">
        <div className="flex place-content-between w-full items-center">
          Favoritos <StarIcon className="text-[#255391] font-black" size={64} />
        </div>
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
              <div className="flex gap-2 justify-center w-full">
                <button className="bg-[#255391] px-5 py-2 rounded-full flex items-center gap-2 text-white font-bold shadow-md">
                  Lembrete ativo <HeartIcon size={20} />
                </button>
              </div>

              <div className="flex justify-between w-full items-center">
                <HeartIcon size={24} className="text-[#255391] mb-4" />
                <div className="flex gap-2">
                  ver mais
                  <ArrowRightIcon className="text-[#255391]" size={24} />
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </main>
  );
}
