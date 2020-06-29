import React from 'react';
import DayCard from './components/DayCard'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Weather Forcasts</h1>
      </header>
      <DayCard/>
    </div>
  );
}

export default App;
