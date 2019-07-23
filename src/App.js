import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Shows from './pages/Shows'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Navbar />
  

      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/shows" component={Shows} />
        <Route component= {NotFound} />
      </Switch>

    
    </div>

  );
}

export default App;
