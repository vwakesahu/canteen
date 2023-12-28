import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LoginContainer, MainContainer } from "./components";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
