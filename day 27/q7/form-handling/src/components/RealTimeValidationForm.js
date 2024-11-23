import React, { useRef, useState } from 'react';

const RealTimeValidationForm = () => {
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const validateInput = () => {
    const value = inputRef.current.value;
    setIsValid(value.length >= 5); // Example rule: minimum 5 characters
  };

  return (
    <div>
      <h2>Real-Time Validation</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter at least 5 characters"
        onChange={validateInput}
      />
      <p style={{ color: isValid ? 'green' : 'red' }}>
        {isValid ? 'Valid input!' : 'Input too short!'}
      </p>
    </div>
  );
};

export default RealTimeValidationForm;
