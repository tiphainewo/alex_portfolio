export type ProjectTags = {
  id: number;
  title: string;
  color: "cyan" | "yellow" | "purple" | "red";
};

export type Project = {
  id: number;
  images: string[];
  description: string;
  title: string;
  tags: ProjectTags[];
};
