"use client";
import { ArrowRightIcon, CalendarIcon } from "@phosphor-icons/react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { allEvents, Event } from "@/app/events";

export default function EventsPage() {
  const params = useParams();
  const events: Event[] = allEvents
    .filter((event) => event.type === params.type)
    .flatMap((event) => event.events);

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
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#F5B041] rounded-lg mt-4 text-white flex items-center w-full p-4 gap-4 text-base font-black"
          >
            <div>{event.emoji}</div>

            <div className="flex flex-col flex-1 justify-center text-center">
              <h3 className="font-black">{event.title}</h3>
              <p>{event.Date}</p>
              <p>{event.Local}</p>
              <Link
                className="flex justify-center items-center gap-1"
                href={`/event-details/${event.id}`}
              >
                Ver detalhes
                <ArrowRightIcon className="text-white" size={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
