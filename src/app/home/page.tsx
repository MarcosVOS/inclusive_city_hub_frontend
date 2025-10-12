"use client";
import HomeButton from "@/components/ui/HomeButton";
import {
  CalendarIcon,
  GearIcon,
  PuzzlePieceIcon,
  StarIcon,
} from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="flex text-white font-black justify-between items-center gap-4 p-8 w-full text-4xl">
        <div>
          Bem vindo,
          <br />
          Convidado
        </div>
        <Image
          src="/viva_sp.png"
          width={128}
          height={128}
          alt="Picture of the author"
        />
      </header>

      <div className="bg-[#255391] w-full flex-grow rounded-t-3xl p-4 grid grid-cols-2 gap-6 place-content-center">
        <HomeButton
          icon={<CalendarIcon className="text-[#274941]" size={64} />}
          label="Eventos Próximos"
          bgColor="bg-[#E67E22]"
        />
        <HomeButton
          icon={<PuzzlePieceIcon className="text-[#274941]" size={64} />}
          label="Categorias"
          bgColor="bg-[#F39C12]"
        />
        <HomeButton
          icon={<StarIcon className="text-[#274941]" size={64} />}
          label="Favoritos"
          bgColor="bg-[#D35400]"
        />
        <HomeButton
          icon={<GearIcon className="text-[#274941]" size={64} />}
          label="Configurações"
          bgColor="bg-[#CA6F1E]"
        />
      </div>
    </main>
  );
}
