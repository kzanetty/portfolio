import React from "react";
import curriculo from "../../../assets/curriculo/CV-Henrique-Zanetti.pdf";
import iconOptions from "../../../constant/icons";
import { RenderIcon } from "../icons/render-icon.component";

export function CurriculoComponent() {
  function handlecurriculo() {
    window.open(curriculo, "_blank");
  }

  return (
    <div onClick={handlecurriculo} className="open-curriculo hover-behavior">
      <RenderIcon icon={iconOptions.CURRICULO} alt="icon curriculo" />
      <p>Curriculo</p>
    </div>
  );
}
