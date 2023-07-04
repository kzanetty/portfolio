import React from "react";

export function CopyToClipboardComponent({ text, information, children }) {
  const handleClick = () => {
    const itemText = document.getElementById("item").textContent;
    copyToClipboard(itemText);
    alert("Texto copiado para a área de transferência: " + itemText);
  };

  const copyToClipboard = (text) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  return (
    <div className="copy-component" onClick={handleClick}>
      {children}
      <p id="item" style={{ display: "none" }}>
        {information}
      </p>
      <p>{text}</p>
    </div>
  );
}
