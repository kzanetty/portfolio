import './style.css'
import { ContainerComponent } from "../components"

export function AboutMeScreen() {
    return (
        <div id="/" className="screen about-me">
            <ContainerComponent fullHeight={true}>
                <div className='conteudos-screens'>
                    <h3>Olá, meu nome é </h3>
                    <h1>Henrique Zanetti</h1>
                    <h1>Sou um desenvolvedor full stack jr</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, facere atque unde optio hic ratione similique, quibusdam neque voluptate laboriosam tempora dicta cupiditate ducimus delectus eaque illo saepe omnis culpa. Laboriosam aliquid animi fuga tempore deserunt cupiditate, accusamus numquam itaque nobis ratione! Veritatis temporibus dicta cum minus pariatur at illo recusandae repellendus, ullam dolor voluptatem laborum officia architecto praesentium eos!
                    </p>
                    <button>Experiencias</button>
                </div>
            </ContainerComponent>
        </div>
    );
}

