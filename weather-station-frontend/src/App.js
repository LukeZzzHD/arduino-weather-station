import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/Weather';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={Weather} />
          <Route path="/statistics" component={Statistics} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;