import "./contact.screen.css";
import { ContainerComponent } from "../../components";

export function ContactScreen() {
  return (
    <div id="contact" className="screen screen-secondary contact">
      <ContainerComponent fullHeight={true}>
        <div className="conteudos-screens">
          <h1>Contact</h1>
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
        </div>
      </ContainerComponent>
    </div>
  );
}
