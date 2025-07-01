import ProjectSection from "./components/ProjectSection";
import { projects } from "./components/projects";
import { Project } from "./components/types";

function ProjectsPage() {
  return (
    <div className="w-full flex flex-col my-12 gap-8">
      <div className="rounded-lg shadow-custom bg-white p-4 px-6 h-fit">
        Hey, here are some of my projects, both personal and professional.
      </div>
      <div className="grid h-full w-full gap-16">
        {projects.map((project: Project, i) => (
          <ProjectSection
            flexDirection={i % 2 == 1 ? "reverse-row" : "row"}
            project={project}
            titleColor="cyan"
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
