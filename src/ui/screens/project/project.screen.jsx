import "./project.screen.css";
import { CardProjectComponent, ContainerComponent } from "../../components";
import projects from '../../../constant/projects'

export function ProjectScreen() {
  return (
    <div id="project" className="screen project">
      <ContainerComponent fullHeight={true}>
        <div className="screen-contents-projects">
          {
            projects.map((project, index) => (
              <CardProjectComponent project={project} key={index} />
            ))
          }
        </div>
      </ContainerComponent>
    </div>
  );
}
