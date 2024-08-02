import React from "react";
import "./darkmode.css";
const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark-theme");
    localStorage.setItem("selectedTheme", "dark-theme");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light-theme");
    localStorage.setItem("selectedTheme", "light-theme");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark-theme") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };
  return (
    <section className="darkmode-swicth-main-container">
      <label class="switch">
        <img src="/Svg/sun-svgrepo-com.svg" alt="" className="sun" />
        <img src="/Svg/moon-svgrepo-com.svg" alt="" className="moon" />
        <input
          type="checkbox"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "dark-theme"}
        />
        <span class="slider round"></span>
      </label>
    </section>
  );
};

export default DarkMode;
