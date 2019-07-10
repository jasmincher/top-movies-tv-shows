import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Shows from './pages/Shows'

function App() {
  return (
    <div>
      <Navbar />
  

      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/shows" component={Shows} />

      </Switch>

    
    </div>

  );
}

export default App;
