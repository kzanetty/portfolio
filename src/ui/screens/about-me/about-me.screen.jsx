import "./about-me.screen.css";
import {
  ContainerComponent,
  LinkComponent,
  RenderIcon,
} from "../../components";
import { useEffect, useState } from "react";
import iconOptions from "../../../constant/icons";

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
    <div id="/" className="screen about-me">
      <ContainerComponent fullHeight={true}>
        <div className="content-about-me">
          <h3 className="caption-about-me">Olá, meu nome é </h3>
          <p className="title-about-me">Henrique Zanetti</p>
          <p className="title-about-me">Sou um desenvolvedor full stack jr</p>
          <p className="text-about-me">
            Sou um desenvolvedor full-stack que está sempre buscando pensar de
            forma criativa e eficiente. Tenho experiência em desenvolvimento de
            aplicações web trabalhando com .NET, Spring e React e experiência
            com trabalho em equipe. Estou em busca de novos desafios e
            oportunidades para continuar a desenvolver minhas habilidades e
            conhecimentos como desenvolvedor.
          </p>
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
