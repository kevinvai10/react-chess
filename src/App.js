import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Board from './components/ChessBoard/Chessboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Board} />
      </Router>
    </div>
  );
}

export default App;
