import logo from './logo.svg';
import './App.css';
import React from 'react';
import DynamicFocusForm from './components/DynamicFocusForm';
import RealTimeValidationForm from './components/RealTimeValidationForm';
import CustomSubmissionForm from './components/CustomSubmissionForm';

const App = () => {
  return (
    <div>
      <h1>useRef Form Handling</h1>
      <DynamicFocusForm />
      <RealTimeValidationForm />
      <CustomSubmissionForm />
    </div>
  );
};

export default App;
