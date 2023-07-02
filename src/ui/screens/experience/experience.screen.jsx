import "./experience.screen.css";
import { ContainerComponent, RelatoExperienciaComponent, RelatoTituloComponent, TecnologiasComponent } from "../../components";
import experiencias from '../../../constant/experiencias'
import tecnologias from '../../../constant/tecnologias'
import { useEffect, useState } from "react";

export function ExperienceScreen() {
  const [showFirstExperience, setShowFirstExperience] = useState(true)
  const [selectedClassName, setSelectedClassName] = useState("hiden-experience")
  const [selectedButton, setSelectedButton] = useState('');

  function selectExperience(className) {
    setShowFirstExperience(false)
    setSelectedButton(className);
    const elementsToHide = document.getElementsByClassName(selectedClassName);
    for (let i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }

    const elementsToShow = document.getElementsByClassName(className);
    for (let i = 0; i < elementsToShow.length; i++) {
      elementsToShow[i].style.display = "block";
    }

    setSelectedClassName(className)
  }

  useEffect(() => {
    if (showFirstExperience) {
      const elementsToShow = document.getElementsByClassName(experiencias[0].nome);
      for (let i = 0; i < elementsToShow.length; i++) {
        elementsToShow[i].style.display = "inline";
      }
    }
  }, [showFirstExperience, selectedClassName])

  return (
    <div id="experience" className="screen screen-secondary experience">
      <ContainerComponent fullHeight={true}>
        <div className="content-experience">

          <div className="content-experience-reports">
            <div className="content-experience-titulos">
              <RelatoTituloComponent experiencias={experiencias} onClick={selectExperience} selectedButton={selectedButton} />
            </div>

            <div className="content-experience-relatos">
              <RelatoExperienciaComponent experiencias={experiencias} />
            </div>
          </div>

          <div className="content-technologies">
            <TecnologiasComponent tecnologias={tecnologias} />
          </div>

        </div>
      </ContainerComponent>
    </div>
  );
}
