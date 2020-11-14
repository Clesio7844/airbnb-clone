import React from 'react';
import Home from './Home.js';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    // BEM
    <div className='app'>
      <Router>
        <Header />

        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
