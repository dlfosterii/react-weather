import React from 'react';
import DailyForecast from './components/DailyForecast';
import Search from './components/Search';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Weather Forecasts</h1>
      </header>
      <Search/>
      <DailyForecast/>
    </div>
  );
}

export default App;
