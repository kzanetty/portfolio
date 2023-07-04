import { RenderIcon } from "../icons/render-icon.component";
import iconOptions from "../../../constant/icons";

const WIDTH_CUSTOM_ICONS = "25px";
export function CardProjectComponent({ project }) {
  function showInteractionIcons() {
    if (project.deploy.state) {
      return (
        <>
          <a href={project.github} target="_blank">
            <RenderIcon
              icon={iconOptions.GITHUB}
              alt="icon github"
              width={WIDTH_CUSTOM_ICONS}
            />
          </a>
          <a href={project.deploy.path} target="_blank">
            <RenderIcon
              icon={iconOptions.EXTERN}
              alt="icon extern"
              width={WIDTH_CUSTOM_ICONS}
            />
          </a>
        </>
      );
    }
    return (
      <a href={project.github} target="_blank">
        <RenderIcon
          icon={iconOptions.GITHUB}
          alt="icon github"
          width={WIDTH_CUSTOM_ICONS}
        />
      </a>
    );
  }

  return (
    <div className="card-project-component">
      <div className="card-project-images">
        <RenderIcon icon={iconOptions.DEFAULT} alt="icon folder" />
        <div className="card-project-icons">{showInteractionIcons()}</div>
      </div>
      <h1>{project.title}</h1>
      <p className="card-project-text">{project.text}</p>
      <ul className="card-project-technologies">
        {project.technologies.map((tec, index) => (
          <li key={index}>{tec}</li>
        ))}
      </ul>
    </div>
  );
}
