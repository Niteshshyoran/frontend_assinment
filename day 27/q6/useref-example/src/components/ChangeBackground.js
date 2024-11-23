import React, { useRef } from 'react';

const ChangeBackground = () => {
  const divRef = useRef(null);

  const handleChangeBackground = () => {
    divRef.current.style.backgroundColor = 
      divRef.current.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
  };

  return (
    <div>
      <h2>Change Background Color</h2>
      <div
        ref={divRef}
        style={{
          width: '200px',
          height: '100px',
          border: '1px solid black',
          margin: '10px 0',
        }}
      >
        Click the button to change my color!
      </div>
      <button onClick={handleChangeBackground}>Change Color</button>
    </div>
  );
};

export default ChangeBackground;
