import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, CreateEditPage } from "./pages";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<CreateEditPage />} />
        <Route path="/create" element={<CreateEditPage />} />
      </Routes>
    </Router>
  );
};

export default App;
