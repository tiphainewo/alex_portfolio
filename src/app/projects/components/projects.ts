import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    images: [
      "/projects/assets_pack/1.png",
      "/projects/assets_pack/2.png",
      "/projects/assets_pack/3.png",
    ],
    description: "description",
    title: "Assets pack",
    tags: [
      {
        id: 1,
        title: "Personnal",
        color: "purple",
      },
      {
        id: 2,
        title: "Game art",
        color: "cyan",
      },
    ],
  },
  {
    id: 2,
    images: [
      "/projects/assets_pack/1.png",
      "/projects/assets_pack/2.png",
      "/projects/assets_pack/3.png",
    ],
    description: "description",
    title: "Playing cards",
    tags: [
      {
        id: 1,
        title: "Professional",
        color: "yellow",
      },
      {
        id: 2,
        title: "Physical item",
        color: "red",
      },
    ],
  },
  {
    id: 3,
    images: [
      "/projects/assets_pack/1.png",
      "/projects/assets_pack/2.png",
      "/projects/assets_pack/3.png",
    ],
    description: "description",
    title: "Bandle Tale",
    tags: [
      {
        id: 1,
        title: "Professional",
        color: "yellow",
      },
      {
        id: 2,
        title: "Game art",
        color: "cyan",
      },
    ],
  },
];
