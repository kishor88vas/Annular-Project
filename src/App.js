import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/Register/RegisterPage.js";
import YourComponent from "./components/HomePage.js";
import LoginPage from "./components/LoginPage.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<YourComponent />} />
        <Route path="/registerUser" element={<RegisterPage />} />
        <Route path="/loginUser" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
