import React from "react";
import curriculo from "../../../assets/curriculo/CV-Henrique-Zanetti.pdf";
import iconOptions from "../../../constant/icons";
import { RenderIcon } from "../icons/render-icon.component";

export function DownloadComponent() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = curriculo;
    link.download = "curriculo-henrique-zanetti.pdf";
    link.click();
  };

  return (
    <div onClick={handleDownload} className="download-curriculo hover-behavior">
      <RenderIcon icon={iconOptions.CURRICULO} alt="icon curriculo" />
      <p>Curriculo</p>
    </div>
  );
}
