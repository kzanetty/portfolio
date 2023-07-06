import "./toastr.component.css";
import { useEffect } from "react";
import useGlobalToastr from "../../../context/toastr/toastr.context";

const TOASTR_DELAY = 5000;

export function ToastrComponent() {
  const [mensagem, setMensagem] = useGlobalToastr();

  useEffect(() => {
    if (mensagem) {
      setTimeout(() => {
        setMensagem("");
      }, TOASTR_DELAY);
    }
  }, [mensagem, setMensagem]);

  if (!mensagem) return null;

  return (
    <div
      className={`toastr ${mensagem.sucesso ? "toastr__sucesso" : "toastr__erro"
        }`}
    >
      <p className="toastr-message">{mensagem.texto}</p>
      <div className="toastr__progresso"></div>
    </div>
  );
}