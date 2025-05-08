import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Head />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;