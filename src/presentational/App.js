import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePageHeader from '../containers/HomePageHeader';
import HomePage from './HomePage';
import './styles/App.css';

const App = () => (
  <Router>
    <div>
      <HomePageHeader />
      <HomePage />
    </div>
  </Router>
)

export default App;
