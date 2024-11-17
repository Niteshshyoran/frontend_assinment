import logo from './logo.svg';
import './App.css';
import React, { useReducer } from "react";

// Initial state
const initialState = { count: 0 };

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-app">
      <h1>Counter: {state.count}</h1>
      <div className="button-container">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
