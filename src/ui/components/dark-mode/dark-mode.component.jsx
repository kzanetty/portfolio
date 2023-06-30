import React from "react";
import sun from "../../../assets/sun.svg";
import moon from "../../../assets/moon.svg";
import "./dark-mode.component.css";

export function DarkModeComponent() {
  function setDarkMode() {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }

  function setLightMode() {
    document.querySelector("body").setAttribute('data-theme', 'light')
  }

  function toggleTheme(e) {
    if (e.target.checked) {
      setDarkMode()
    } else {
      setLightMode()
    }
  }

  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" onChange={toggleTheme} />
      <label className="dark_mode_label" for="darkmode-toggle">
        <img src={sun} alt="sun" className="sun" />
        <img src={moon} alt="moon" className="moon" />
      </label>
    </div>
  );
}
