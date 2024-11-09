import React, { useEffect } from 'react';

function MouseMovementComponent() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log('Mouse X Position:', event.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <h2>Move your mouse to see the X-coordinate in the console</h2>;
}

export default MouseMovementComponent;
