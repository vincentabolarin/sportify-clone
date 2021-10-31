import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './App.css';
import Header from './components/Header.js';
import AllCompetitions from './components/AllCompetitions';
import Championship from './components/Championship'
import Footer from './components/Footer.js';

import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AllCompetitions />
        <Championship />
        <Footer />
      </div>
    </Router>   
  );
}

export default App;
