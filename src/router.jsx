import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Property,
  Agent,
  Review,
  Message,
  Profile,
} from "./pages";
function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/property" element={<Property />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/review" element={<Review />} />
          <Route path="/message" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routers;
