import { randomUUID } from "crypto";

type Service = {
  id: string;
  title: string;
  description: string;
  image_url: string;
};

export const services: Service[] = [
  {
    id: randomUUID(),
    title: "Som",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eius error aperiam voluptatem ullam totam iure corporis illum deleniti ut temporibus quas consequuntur ducimus voluptatum! Sequi atque debitis id labore.",
    image_url: "/pista-paris.png",
  },
  {
    id: randomUUID(),
    title: "Iluminação",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eius error aperiam voluptatem ullam totam iure corporis illum deleniti ut temporibus quas consequuntur ducimus voluptatum! Sequi atque debitis id labore.",
    image_url: "/pista-paris.png",
  },
  {
    id: randomUUID(),
    title: "Telão",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eius error aperiam voluptatem ullam totam iure corporis illum deleniti ut temporibus quas consequuntur ducimus voluptatum! Sequi atque debitis id labore.",
    image_url: "/pista-paris.png",
  },
  {
    id: randomUUID(),
    title: "Karaoke",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eius error aperiam voluptatem ullam totam iure corporis illum deleniti ut temporibus quas consequuntur ducimus voluptatum! Sequi atque debitis id labore.",
    image_url: "/pista-paris.png",
  },
  {
    id: randomUUID(),
    title: "Box Truss",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eius error aperiam voluptatem ullam totam iure corporis illum deleniti ut temporibus quas consequuntur ducimus voluptatum! Sequi atque debitis id labore.",
    image_url: "/pista-paris.png",
  },
  {
    id: randomUUID(),
    title: "Palco",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eius error aperiam voluptatem ullam totam iure corporis illum deleniti ut temporibus quas consequuntur ducimus voluptatum! Sequi atque debitis id labore.",
    image_url: "/niver.png",
  },
  {
    id: randomUUID(),
    title: "Casamento",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eius error aperiam voluptatem ullam totam iure corporis illum deleniti ut temporibus quas consequuntur ducimus voluptatum! Sequi atque debitis id labore.",
    image_url: "/niver.png",
  },
  {
    id: randomUUID(),
    title: "Pista Paris",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eius error aperiam voluptatem ullam totam iure corporis illum deleniti ut temporibus quas consequuntur ducimus voluptatum! Sequi atque debitis id labore.",
    image_url: "/niver.png",
  },
  {
    id: randomUUID(),
    title: "Plataforma Técnica",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eius error aperiam voluptatem ullam totam iure corporis illum deleniti ut temporibus quas consequuntur ducimus voluptatum! Sequi atque debitis id labore.",
    image_url: "/niver.png",
  },
];
