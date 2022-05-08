import React from 'react';
import About from './components/About';
import Nav from './components/Navigation';
import './App.scss'


function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
