import "./experience.screen.css";
import {
  ContainerComponent,
  RelatoExperienciaComponent,
  RelatoTituloComponent,
} from "../../components";
import experiencias from "../../../constant/experiencias";
import { useEffect, useState } from "react";

export function ExperienceScreen() {
  const [showFirstExperience, setShowFirstExperience] = useState(true);
  const [selectedClassName, setSelectedClassName] =
    useState("hiden-experience");

  function selectExperience(className) {
    setShowFirstExperience(false);

    const elementsToHide = document.getElementsByClassName(selectedClassName);
    for (let i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }

    const elementsToShow = document.getElementsByClassName(className);
    for (let i = 0; i < elementsToShow.length; i++) {
      elementsToShow[i].style.display = "block";
    }

    setSelectedClassName(className);
  }

  function handleButtonClick(event) {
    const buttons = document.querySelectorAll('[id^="button-"]');
    buttons.forEach((button) => {
      button.classList.remove("activeButton");
    });

    const button = event.target;
    button.classList.add("activeButton");
  }

  function setInitialExperienceToDisplay() {
    if (showFirstExperience) {
      const elementsToShow = document.getElementsByClassName(
        experiencias[0].nome
      );
      for (let i = 0; i < elementsToShow.length; i++) {
        elementsToShow[i].style.display = "block";
      }

      const buttonToShow = document.getElementsByClassName(
        `button-${experiencias[0].nome}`
      );
      for (let i = 0; i < buttonToShow.length; i++) {
        buttonToShow[i].classList.add("activeButton");
      }
    }
  }

  useEffect(() => {
    setInitialExperienceToDisplay();
  }, [showFirstExperience, selectedClassName]);

  return (
    <div id="experience" className="screen-secondary experience">
      <ContainerComponent fullHeight={true}>
        <div className="content-experience">
          <div className="content-experience-titulos">
            <h1>Experiencias</h1>
            <RelatoTituloComponent
              experiencias={experiencias}
              onClick={selectExperience}
              handleButtonClick={handleButtonClick}
            />
          </div>
          <div className="content-experience-relatos">
            <RelatoExperienciaComponent experiencias={experiencias} />
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
}
