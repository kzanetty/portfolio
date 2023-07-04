import { useEffect, useState } from "react";
import { ContainerComponent, LinkComponent, RenderIcon } from "../";
import "./navbar.component.css";
import iconOptions from "../../../constant/icons";

export function NavbarComponent() {
  const [heightNavbar, setHeightNavbar] = useState(null);

  function getHeightNavBar() {
    const navbarElement = document.getElementById("navbar");
    const valueHeightNavbar = navbarElement.offsetHeight;
    setHeightNavbar(valueHeightNavbar);
  }

  useEffect(() => {
    getHeightNavBar();
  }, []);

  return (
    <div id="navbar" className="navbar">
      <ContainerComponent fullHeight={true}>
        <div className="content-navbar">
          <RenderIcon
            icon={iconOptions.PROGRAM}
            alt="icon program"
            width="auto"
          />
          <ul className="items-navbar">
            <li>
              <LinkComponent
                children={"Sobre mim"}
                to={"/"}
                heightNavbar={heightNavbar}
              />
            </li>
            <li>
              <LinkComponent
                children={"Experiência"}
                to={"experience"}
                heightNavbar={heightNavbar}
              />
            </li>
            <li>
              <LinkComponent
                children={"Projetos"}
                to={"project"}
                heightNavbar={heightNavbar}
              />
            </li>
            <li>
              <LinkComponent
                children={"Contato"}
                to={"contact"}
                heightNavbar={heightNavbar}
              />
            </li>
          </ul>
        </div>
      </ContainerComponent>
    </div>
  );
}
