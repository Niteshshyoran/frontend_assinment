import logo from './logo.svg';
import React, { useReducer } from "react";
import "./App.css";

const initialState = { theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`app-container ${state.theme}`}>
      <h1>{state.theme.charAt(0).toUpperCase() + state.theme.slice(1)} Theme</h1>
      <h3>Click to change theme</h3>
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className="toggle-button"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
