import "./about-me.screen.css";
import {
  ContainerComponent,
  LinkComponent,
  RenderIcon,
  TecnologiasComponent,
} from "../../components";
import { useEffect, useState } from "react";
import iconOptions from "../../../constant/icons";
import tecnologias from "../../../constant/tecnologias";
import about from "../../../constant/about";

export function AboutMeScreen() {
  const [heightNavbar, setHeightNavbar] = useState(50);

  function getHeightNavBar() {
    const navbarElement = document.getElementById("navbar");
    const valueHeightNavbar = navbarElement.offsetHeight + 1;
    setHeightNavbar(valueHeightNavbar);
  }

  useEffect(() => {
    getHeightNavBar();
  }, []);
  return (
    <div id="/" className="about-me">
      <ContainerComponent fullHeight={true}>
        <div className="content-about-me">
          <h3 className="caption-about-me">Olá, meu nome é </h3>
          <p className="title-about-me">{about.NAME}</p>
          <p className="title-about-me">{about.TITLE}</p>
          <p className="text-about-me">{about.TEXT}</p>
          <div className="content-technologies">
            <TecnologiasComponent tecnologias={tecnologias} />
          </div>
          <div className="div-learn-more">
            <LinkComponent
              to={"experience"}
              heightNavbar={heightNavbar}
              style={"link-experience"}
            >
              Experiencia
              <RenderIcon
                icon={iconOptions.ARROW}
                alt="icon arrow"
                width="16px"
              />
            </LinkComponent>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
}
