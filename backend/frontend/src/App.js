import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Assets from "./components/assets/Assets";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Assets />
      </div>
    </>
  );
};

export default App;
