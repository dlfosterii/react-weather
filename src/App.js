import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DailyForecast from './components/DailyForecast';
import Search from './components/Search';
import About from './components/About';

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
            <Link to={'/about'} style={ { padding: '15px' }}>About</Link>
          </Route>
          <Route path='/about'>
            <About/>
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








