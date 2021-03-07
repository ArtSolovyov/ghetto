import React from 'react';
import Header from  './components/header/header';
import About from './components/about/about';
import LittleCards from './components/littleCards/littleCards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <LittleCards />
    </div>
  );
}

export default App;
