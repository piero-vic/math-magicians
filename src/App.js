import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';

const App = () => (
  <Router>
    <header className="header">
      <h1>Math Magicians</h1>
      <ul className="navigation">
        <li><a href="/">Home</a></li>
        <li><a href="/calculator">Calculator</a></li>
        <li><a href="/quote">Quote</a></li>
      </ul>
    </header>
    <Routes>
      <Route
        path="/"
        element={(
          <div className="App">
            <div className="homepage-container">
              <h2>Welcome to our page!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        )}
      />
      <Route
        path="/calculator"
        element={(
          <div className="App calculator-container">
            <h2>Let&apos;s do some Math</h2>
            <Calculator />
          </div>
        )}
      />
      <Route
        path="/quote"
        element={(
          <div className="App quote-container">
            <h2>
              Mathemathics is not about numbers, equations, computations or algorithms;
              it&apos;s about undestanding - William Paul Thurston
            </h2>
          </div>
        )}
      />
    </Routes>
  </Router>
);

export default App;
