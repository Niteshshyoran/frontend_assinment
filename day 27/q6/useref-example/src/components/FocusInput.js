import React, { useRef, useEffect } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Focus Input Field</h2>
      <input ref={inputRef} type="text" placeholder="Focus me on load" />
    </div>
  );
};

export default FocusInput;
