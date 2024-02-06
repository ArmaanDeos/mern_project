import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pay" exact Component={Pay} />
        <Route path="/success" Component={Success} />
      </Routes>
    </Router>
  );
};

export default App;
