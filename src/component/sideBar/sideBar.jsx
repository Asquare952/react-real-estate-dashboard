import React from "react";
import "./sideBar.css";
import Logo from "../../assets/logo.png";
// import { useState } from "react";
// import SideBarData from "./utils/sidebardata";
import { MdClose } from "react-icons/md";
function SideBar({ aside, value, setValue }) {
  const {} = aside[value];
  return (
    <>
      <aside className="sideBar">
        <section className="sidebar-content">
          <div className="logo-container">
            <a className="logo" href="/">
              <img src={Logo} alt="logo" />
              <span>Yariga</span>
            </a>
            <MdClose className="close-icon"/>
          </div>

          <nav className="nav-container">
            <ul className="sidebar-link">
              {aside.map((item, index) => {
                return (
                  <li
                    className={`links ${index === value && "active-links"}`}
                    key={item.id}
                    onClick={() => setValue(index)}
                  >
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
