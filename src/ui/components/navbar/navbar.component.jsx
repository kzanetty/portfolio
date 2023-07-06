import { useEffect, useState } from "react";
import { ContainerComponent, LinkComponent, RenderIcon } from "../";
import "./navbar.component.css";
import iconOptions from "../../../constant/icons";

export function NavbarComponent() {
  const [heightNavbar, setHeightNavbar] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function getHeightNavBar() {
    const navbarElement = document.getElementById("navbar");
    const valueHeightNavbar = navbarElement.offsetHeight;
    setHeightNavbar(valueHeightNavbar);
  }

  function closeMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    getHeightNavBar();
  }, [menuOpen, heightNavbar]);

  return (
    <div id="navbar" className={`navbar ${menuOpen ? "menu-open" : ""} padding-responsividade`}>
      <ContainerComponent fullHeight={true}>
        <div className="content-navbar">
          <button className="menu-toggle" onClick={handleMenuToggle}>
            <RenderIcon
              icon={iconOptions.MENU}
              alt="icon program"
              width="50px"
            />
          </button>
          <div className="logo-navbar">
            <RenderIcon
              icon={iconOptions.PROGRAM}
              alt="icon program"
              width="100%"
            />
          </div>
          <ul className={`items-navbar ${menuOpen ? "menu-open" : ""}`}>
            <li>
              <LinkComponent
                onClick={closeMenuToggle}
                children={"Sobre mim"}
                to={"/"}
                heightNavbar={heightNavbar}
              />
            </li>
            <li>
              <LinkComponent
                onClick={closeMenuToggle}
                children={"Experiência"}
                to={"experience"}
                heightNavbar={heightNavbar}
              />
            </li>
            <li>
              <LinkComponent
                onClick={closeMenuToggle}
                children={"Projetos"}
                to={"project"}
                heightNavbar={heightNavbar}
              />
            </li>
            <li>
              <LinkComponent
                onClick={closeMenuToggle}
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
