import React from 'react';
import './GreetingCard.css';

function GreetingCard({ greeting, name }) {
  return (
    <div className="greeting-card">
      <h2>{greeting}</h2>
      <p>- {name}</p>
    </div>
  );
}

export default GreetingCard;
