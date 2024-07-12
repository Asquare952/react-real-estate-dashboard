import "./App.css";
import Hearder from "./component/hearder/header";
import SideBar from "./component/sideBar/sideBar";
import Main from "./component/main/main";
import Router from "./router";
import { useState } from "react";
import SideBarData from "./utils/sidebardata";
function App() {
  const [sidBarLinks, setsidBarLinks] = useState(SideBarData)
  const [value, setValue] = useState(0)
  
  return (
      <section className="grid-container">
        <Router />
        <Hearder />
        <SideBar aside={sidBarLinks} setValue={setValue} value={value}/>
        <Main aside={sidBarLinks} value={value}/>
      </section>
  );
}

export default App;
