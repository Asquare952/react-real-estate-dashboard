import React, { useRef } from "react";
import "./layout.css";
import Hearder from "../../component/hearder/header";
import SideBar from "../../component/sideBar/sideBar";
import Main from "../../component/main/main";
import { useState, useEffect } from "react";
import SideBarData from "../../utils/sidebardata";
const Layout = () => {
  const [sidBarLinks, setsidBarLinks] = useState(SideBarData);
  const [value, setValue] = useState(0);
  const [openSideBar, setOpenSideBar] = useState(false);

  const showSidebar = () => {
    setOpenSideBar(!openSideBar);
  };
  const closeSidebar = () => {
    setOpenSideBar(!openSideBar);
  };


  let sidBarRef = useRef();

  useEffect(() => {
    let myHandler = (event) => {
      if (!sidBarRef.current.contains(event.target)) {
      setOpenSideBar(false)
      }
    };

    document.addEventListener("mousedown", myHandler);

    return () => {
      document.removeEventListener("mousedown", myHandler);
    };
  });

  return (
    <section className="grid-container">
      <Hearder showSidebar={showSidebar} />
      <SideBar
        clickOutside={sidBarRef}
        aside={sidBarLinks}
        setValue={setValue}
        value={value}
        sideBar={openSideBar}
        closesidebar={closeSidebar}
      />
      <Main aside={sidBarLinks} value={value} />
    </section>
  );
};

export default Layout;
