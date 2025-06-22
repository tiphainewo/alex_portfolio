import ProjectSection from "./components/ProjectSection";
import { projects } from "./components/projects";

function ProjectsPage() {
  return (
    <div className="grid h-full w-full my-4 gap-16">
      <div className="rounded-lg shadow-custom my-12 bg-white p-4 px-6 h-fit">
        Hey, here are some of my projects, both personal and professional.
      </div>
      {projects.map((project, i) => (
        <ProjectSection
          flexDirection={i % 2 == 1 ? "reverse-row" : "row"}
          project={project}
          titleColor="cyan"
          key={project.id}
        />
      ))}
    </div>
  );
}

export default ProjectsPage;
