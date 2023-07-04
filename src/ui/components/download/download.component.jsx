import React from "react";
import curriculo from "../../../assets/curriculo/CV-Henrique-Zanetti.pdf";
import iconCurriculo from "../../../assets/icons/icon-curriculo.png";

export function DownloadComponent() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = curriculo;
    link.download = "curriculo-henrique-zanetti.pdf";
    link.click();
  };

  return (
    <div onClick={handleDownload} className="download-curriculo hover-behavior">
      <img
        src={iconCurriculo}
        alt="icon curriculo"
        className="default-width-for-icons"
      />
      <p>Curriculo</p>
    </div>
  );
}
