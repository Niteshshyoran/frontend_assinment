import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import GreetingCard from './GreetingCard';
import './GreetingCard.css';


function App() {
  const [cards, setCards] = useState([
    { greeting: 'Happy Birthday', name: 'John Doe' },
    { greeting: 'Congratulations', name: 'Jane Smith' },
    { greeting: 'Happy Anniversary', name: 'Alice & Bob' },
    { greeting: 'Welcome to the Team', name: 'Charlie' }
  ]);

  return (
    <div className="app">
      <h1>Greeting Cards</h1>
      <div className="card-list">
        {cards.map((card, index) => (
          <GreetingCard key={index} greeting={card.greeting} name={card.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
