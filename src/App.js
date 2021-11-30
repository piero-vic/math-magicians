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
    <div className="App">
      <Routes>
        <Route path="/" element={<h2>This is the home page</h2>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<h2>This is the quotes page</h2>} />
      </Routes>
    </div>
  </Router>
);

export default App;
