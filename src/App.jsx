import "./App.css";
import Layout from "./pages/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Property, Agent, Review, Message, Profile } from "./pages";
// import Hearder from "./component/hearder/header";
// import SideBar from "./component/sideBar/sideBar";
// import Main from "./component/main/main";
// import Router from "./router";
// import { useState } from "react";
// import SideBarData from "./utils/sidebardata";
function App() {
  // const [sidBarLinks, setsidBarLinks] = useState(SideBarData)
  // const [value, setValue] = useState(0)

  return (
    // <section className="grid-container">
    //   <Hearder />
    //   <SideBar aside={sidBarLinks} setValue={setValue} value={value}/>
    //   <Main aside={sidBarLinks} value={value}/>
    // </section>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/property" element={<Property />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/review" element={<Review />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
