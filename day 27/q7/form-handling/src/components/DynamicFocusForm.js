import React, { useRef } from 'react';

const DynamicFocusForm = () => {
  const inputRefs = useRef([]);

  const focusInput = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <div>
      <h2>Dynamic Input Focus</h2>
      {['First Name', 'Last Name', 'Email'].map((placeholder, index) => (
        <div key={index}>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            placeholder={placeholder}
          />
          <button onClick={() => focusInput(index)}>Focus</button>
        </div>
      ))}
    </div>
  );
};

export default DynamicFocusForm;
