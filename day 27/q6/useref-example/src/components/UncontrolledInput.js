import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleShowValue = () => {
    alert(`Current value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Uncontrolled Input</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleShowValue}>Show Input Value</button>
    </div>
  );
};

export default UncontrolledInput;
