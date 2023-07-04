import "./button.component.css";

export function ButtonEstilizadoComponent({ texto, onClick }) {
  return (
    <button onClick={onClick} className="button-estilizado">
      {texto}
    </button>
  );
}
