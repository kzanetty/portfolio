import "./project.screen.css";
import { CardProjectComponent, ContainerComponent } from "../../components";
import projects from "../../../constant/projects";

export function ProjectScreen() {
  return (
    <div id="project" className="project background-color-first">
      <ContainerComponent fullHeight={true}>
        <div className="screen-contents-projects">
          <h1>Projetos públicos</h1>
          <div className="contents-projects">
            {projects.map((project, index) => (
              <CardProjectComponent project={project} key={index} />
            ))}
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
}
