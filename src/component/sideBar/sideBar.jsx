import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import DarkMode from "../darkmode/DarkMode";
function SideBar({ aside, value, setValue, sideBar, closesidebar, clickOutside }) {
  return (
    <>
      <aside id="sidebar" ref={clickOutside} className={sideBar ? "show-sidebar" : ""}>
        <section className="sidebar-content">
          <div className="logo-container">
            <a className="logo" href="/">
              <img src={Logo} alt="logo" />
              <span>Yariga</span>
            </a>
            <MdClose className="close-icon" onClick={closesidebar} />
          </div>

          <nav className="nav-container">
            <ul className="sidebar-link" onClick={closesidebar}>
              {aside.map((item, index) => {
                return (
                  <li
                    className={`links ${index === value && "active-links"}`}
                    key={item.id}
                    onClick={() => setValue(index)}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <DarkMode />
        </section>
      </aside>
    </>
  );
}

export default SideBar;
