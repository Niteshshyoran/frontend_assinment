import logo from './logo.svg';
import './App.css';
import React from 'react';
import FocusInput from './components/FocusInput';
import UncontrolledInput from './components/UncontrolledInput';
import ChangeBackground from './components/ChangeBackground';

const App = () => {
  return (
    <div>
      <h1>React useRef Hook Examples</h1>
      <FocusInput />
      <UncontrolledInput />
      <ChangeBackground />
    </div>
  );
};

export default App;
