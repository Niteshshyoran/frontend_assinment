import React, { useEffect } from 'react';

function ScrollComponent() {
  useEffect(() => {
    const handleScroll = () => {
      console.log(`Scroll position: ${window.scrollY}`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '150vh', padding: '20px' }}>
      <h1>Scroll to see the event listener in action!</h1>
    </div>
  );
}

export default ScrollComponent;
