import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Register,
  Login,
  Dashboard,
  Property,
  Agent,
  Review,
  Message,
  Profile,
} from "./pages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="" element={<Register />} />
          <Route index path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/property" element={<Property />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/review" element={<Review />} />
          <Route path="/message" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
