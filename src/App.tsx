import "./App.css";
import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import LandingPage from "./pages/Landingpage";

const App: React.FC = () => {
  return (
    <>

        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>

    </>
  );
};

export default App;
