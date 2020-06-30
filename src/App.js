import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DailyForecast from './components/DailyForecast';
import Search from './components/Search';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Daily Weather Forecasts</h1>
        </header>
        <Switch>
          <Route exact path='/' component={DailyForecast}>
            <Search />
            <DailyForecast />
          </Route>
          <Route path='/hourly'>
            <h1>this the hourly Forecasts</h1>
          </Route>
          <Route>
            <h1>Error - 404 Not Found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>


  );
}

export default App;








