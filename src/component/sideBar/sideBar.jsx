import React from "react";
import "./sideBar.css";
import Logo from "../../assets/logo.png";
// import { useState } from "react";
// import SideBarData from "./utils/sidebardata";
function SideBar({ aside, value, setValue }) {
  const {} = aside[value];
  return (
    <>
      <aside className="sideBar">
        <section className="sidebar-content">
          <div className="logo-container">
            <a href="/">
              <img src={Logo} alt="logo" />
              <span>Yariga</span>
            </a>
          </div>

          <nav>
            <ul>
              {aside.map((item, index) => {
                return (
                  <li key={item.id} onClick={() => setValue(index)}>
                    <a href={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
      </aside>
    </>
  );
}

export default SideBar;
