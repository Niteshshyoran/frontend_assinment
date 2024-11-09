import logo from './logo.svg';
import './App.css';
import React from 'react';
import FetchDataComponent from './FetchDataComponent';
import MouseMovementComponent from './MouseMovementComponent';
import DocumentTitleComponent from './DocumentTitleComponent';

function App() {
  return (
    <div>
      <h1>React useEffect Demo</h1>
      <FetchDataComponent />
      <MouseMovementComponent />
      <DocumentTitleComponent />
    </div>
  );
}

export default App;
