import { useEffect, useState } from "react";
import { ContainerComponent, LinkComponent } from "../";
import "./navbar.component.css";
import iconProgramacao from "../../../assets/icon-programacao.png";

export function NavbarComponent() {
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
    <div id="navbar" className="navbar">
      <ContainerComponent fullHeight={true}>
        <div className="content-navbar">
          <img src={iconProgramacao} alt="Icon de Programação" />
          <ul className="items-navbar">
            <li>
              <LinkComponent children={"Sobre mim"} to={"/"} heightNavbar={heightNavbar} />
            </li>
            <li>
              <LinkComponent children={"Experiência"} to={"experience"} heightNavbar={heightNavbar} />
            </li>
            <li>
              <LinkComponent children={"Projetos"} to={"project"} heightNavbar={heightNavbar} />
            </li>
            <li>
              <LinkComponent children={"Contato"} to={"contact"} heightNavbar={heightNavbar} />
            </li>
          </ul>
        </div>
      </ContainerComponent>
    </div>
  );
}