import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
import AllCompetitions from './components/AllCompetitions';
import Championship from './components/Championship'
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/all-competitions'>
            <AllCompetitions />
          </Route>
          <Route path='/championship'>
            <Championship />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
