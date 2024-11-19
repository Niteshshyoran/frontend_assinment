import React, { useReducer } from "react";

// Initial state
const initialState = {
  isVisible: false,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { ...state, isVisible: !state.isVisible };
    default:
      throw new Error("Invalid action type");
  }
};

const ToggleMessage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}>
        Toggle Message
      </button>
      {state.isVisible && <p>Hello, World!</p>}
    </div>
  );
};

export default ToggleMessage;
