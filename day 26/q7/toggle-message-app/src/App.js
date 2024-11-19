import logo from './logo.svg';
import './App.css';
import React from "react";
import ToggleMessage from "./components/ToggleMessage";

const App = () => {
  return (
    <div>
      <h1>Message Toggle App</h1>
      <ToggleMessage />
    </div>
  );
};

export default App;
