import "./about-me.screen.css"
import { ContainerComponent, LinkComponent } from "../../components";
import arrow from '../../../assets/arrow-saiba-mais.png'
// import arrow from '../../../assets/arrow-saiba-mais.svg'
import { useEffect, useState } from "react";

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
            Sou um desenvolvedor full-stack
            que está sempre buscando pensar
            de forma criativa e eficiente. Tenho
            experiência em desenvolvimento
            de aplicações web trabalhando
            com .NET, Spring e React e
            experiência com trabalho em
            equipe. Estou em busca de novos
            desafios e oportunidades para
            continuar a desenvolver minhas
            habilidades e conhecimentos como
            desenvolvedor.
          </p>
          {/* <div className="div-learn-more">
            <a href="#experience" className="link-learn-more">Ver experiencias <img src={arrow} alt="arrow" /></a>
          </div> */}
          <div className="div-learn-more">
            <LinkComponent children={"Experiência"} to={"experience"} heightNavbar={heightNavbar} />
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
}
