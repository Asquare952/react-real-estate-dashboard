// import "./App.css";
import Layout from "./pages/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Property, Agent, Review, Message, Profile } from "./pages";
function App() {

  return (
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
