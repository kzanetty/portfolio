import { RenderIcon } from "../icons/render-icon.component";

export function TecnologiasComponent({ tecnologias }) {
  return (
    <>
      {/* <h1>Tecnologias</h1> */}
      <ul className="ul-technologies">
        {tecnologias.map((tec, index) => (
          <li key={index}>
            <RenderIcon icon={tec.image} alt={`icon ${tec.name}`} />
            {tec.name}
          </li>
        ))}
      </ul>
    </>
  );
}
