import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginContainer, MainContainer } from "./components";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/" element={<MainContainer />} />
      </Routes>
    </div>
  );
};

export default App;
