import "./project.screen.css";
import { ContainerComponent } from "../../components";

export function ProjectScreen() {
  return (
    <div id="project" className="screen project">
      <ContainerComponent fullHeight={true}>
        <div className="conteudos-screens">
          <h1>projetos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, facere atque unde optio hic ratione similique, quibusdam
            neque voluptate laboriosam tempora dicta cupiditate ducimus delectus
            eaque illo saepe omnis culpa. Laboriosam aliquid animi fuga tempore
            deserunt cupiditate, accusamus numquam itaque nobis ratione!
            Veritatis temporibus dicta cum minus pariatur at illo recusandae
            repellendus, ullam dolor voluptatem laborum officia architecto
            praesentium eos!
          </p>
          <button>Entrar em contato</button>
        </div>
      </ContainerComponent>
    </div>
  );
}
