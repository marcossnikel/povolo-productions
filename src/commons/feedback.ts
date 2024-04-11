import { randomUUID } from "crypto";

type Feedbacks = {
  id: string;
  title: string;
  description: string;
  image_url: string;
};

export const feedbacks: Feedbacks[] = [
  {
    id: randomUUID(),
    title: "Som",
    description: "lorem5",
    image_url: "/rick-renner.png",
  },
  {
    id: randomUUID(),
    title: "Iluminação",
    description: "lorem5",
    image_url: "/rick-renner.png",
  },
  {
    id: randomUUID(),
    title: "Telão",
    description: "lorem5",
    image_url: "/rick-renner.png",
  },
  {
    id: randomUUID(),
    title: "Karaoke",
    description: "lorem5",
    image_url: "/rick-renner.png",
  },
  {
    id: randomUUID(),
    title: "Box Truss",
    description: "lorem5",
    image_url: "/rick-renner.png",
  },
  {
    id: randomUUID(),
    title: "Palco",
    description: "lorem5",
    image_url: "/rick-renner.png",
  },
  {
    id: randomUUID(),
    title: "Casamento",
    description: "lorem5",
    image_url: "/rick-renner.png",
  },
  {
    id: randomUUID(),
    title: "Pista Paris",
    description: "lorem5",
    image_url: "/rick-renner.png",
  },
  {
    id: randomUUID(),
    title: "Plataforma Técnica",
    description: "lorem5",
    image_url: "/rick-renner.png",
  },
];
