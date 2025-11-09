import {
  PersonSimpleRunIcon,
  BicycleIcon,
  MountainsIcon,
  TreePalmIcon,
  FilmSlateIcon,
  CookingPotIcon,
  FlowerLotusIcon,
  BrainIcon,
  WindIcon,
  VolleyballIcon,
  SoccerBallIcon,
  BasketballIcon,
} from "@phosphor-icons/react";

export interface Event {
  title: string;
  description: string;
  emoji: React.ReactNode;
  Date: string;
  Local: string;
  id: number;
}

export interface EventType {
  type: string;
  events: Event[];
}

const outdoorEvents: Event[] = [
  {
    id: 1,
    title: "Caminhada na trilha",
    description:
      "Participe de uma caminhada leve em meio à natureza e descubra belas paisagens no Parque das Flores.",
    emoji: (
      <PersonSimpleRunIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
    Date: "26 abr | 10:00 AM",
    Local: "Parque das Flores",
  },
  {
    id: 2,
    title: "Pedalada ecológica",
    description:
      "Um passeio de bike para todas as idades, promovendo saúde e consciência ambiental.",
    emoji: (
      <BicycleIcon className="text-[#274941] bg-[#FF891A] rounded" size={64} />
    ),
    Date: "4 mai | 08:00 AM",
    Local: "Ciclovia da Serra",
  },
  {
    id: 3,
    title: "Trilha nas montanhas",
    description:
      "Aventura e superação em uma trilha guiada pelas montanhas da Serra Verde.",
    emoji: (
      <MountainsIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
    Date: "18 mai | 07:30 AM",
    Local: "Serra Verde",
  },
];

const leisureEvents: Event[] = [
  {
    id: 4,
    title: "Piquenique no parque",
    description:
      "Um dia tranquilo ao ar livre com música, comidas e atividades em família.",
    emoji: (
      <TreePalmIcon className="text-[#274941] bg-[#FF891A] rounded" size={64} />
    ),
    Date: "20 abr | 15:00 PM",
    Local: "Lagoa Azul",
  },
  {
    id: 5,
    title: "Sessão de cinema ao ar livre",
    description:
      "Assista a clássicos do cinema sob as estrelas, em um ambiente acolhedor e descontraído.",
    emoji: (
      <FilmSlateIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
    Date: "27 abr | 19:30 PM",
    Local: "Praça da Cultura",
  },
  {
    id: 6,
    title: "Feira gastronômica",
    description:
      "Experimente sabores locais e internacionais em um evento repleto de aromas e boa música.",
    emoji: (
      <CookingPotIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
    Date: "11 mai | 11:00 AM",
    Local: "Parque da Cidade",
  },
];

const yogaEvents: Event[] = [
  {
    id: 7,
    title: "Yoga ao nascer do sol",
    description:
      "Revitalize corpo e mente com uma sessão de yoga ao som do mar e da brisa matinal.",
    emoji: (
      <FlowerLotusIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
    Date: "28 abr | 06:30 AM",
    Local: "Praia do Sol",
  },
  {
    id: 8,
    title: "Meditação guiada",
    description:
      "Aprenda técnicas de foco e tranquilidade em uma prática conduzida por instrutores experientes.",
    emoji: (
      <BrainIcon className="text-[#274941] bg-[#FF891A] rounded" size={64} />
    ),
    Date: "5 mai | 18:00 PM",
    Local: "Espaço Zen",
  },
  {
    id: 9,
    title: "Aula de respiração e relaxamento",
    description:
      "Domine o poder da respiração consciente e alivie o estresse em um ambiente acolhedor.",
    emoji: (
      <WindIcon className="text-[#274941] bg-[#FF891A] rounded" size={64} />
    ),
    Date: "12 mai | 09:00 AM",
    Local: "Centro Cultural",
  },
];

const groupSportEvents: Event[] = [
  {
    id: 10,
    title: "Torneio de vôlei",
    description:
      "Monte sua equipe e participe do torneio amistoso de vôlei, com premiação para os finalistas.",
    emoji: (
      <VolleyballIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
    Date: "3 mai | 14:00 PM",
    Local: "Ginásio Municipal",
  },
  {
    id: 11,
    title: "Futebol das Amigas",
    description:
      "Diversão e espírito esportivo em um jogo amistoso de futebol feminino.",
    emoji: (
      <SoccerBallIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
    Date: "10 mai | 16:30 PM",
    Local: "Campo das Palmeiras",
  },
  {
    id: 12,
    title: "Basquete comunitário",
    description:
      "Participe de uma manhã de esporte e integração com a comunidade local.",
    emoji: (
      <BasketballIcon
        className="text-[#274941] bg-[#FF891A] rounded"
        size={64}
      />
    ),
    Date: "17 mai | 09:30 AM",
    Local: "Quadra Central",
  },
];

const allEvents: EventType[] = [
  { type: "outdoor-sport", events: outdoorEvents },
  { type: "leisure", events: leisureEvents },
  { type: "yoga", events: yogaEvents },
  { type: "group-sport", events: groupSportEvents },
];

export function getEventById(id: number): Event | undefined {
  for (const eventType of allEvents) {
    const event = eventType.events.find((event) => event.id === id);
    if (event) {
      return event;
    }
  }
  return undefined;
}

export { allEvents };
