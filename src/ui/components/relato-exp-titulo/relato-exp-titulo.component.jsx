export function RelatoTituloComponent({
  experiencias,
  onClick,
  handleButtonClick,
}) {
  return (
    <>
      <h1>Experiencias</h1>
      <ul className="ul-button-title-experience">
        {experiencias.map((exp, index) => (
          <li key={index}>
            <button
              className={`button-title-experience button-${exp.nome}`}
              id="button-title"
              onClick={(e) => {
                onClick(exp.nome);
                handleButtonClick(e);
              }}
            >
              {exp.nome}
            </button>
            <p></p>
          </li>
        ))}
      </ul>
    </>
  );
}
