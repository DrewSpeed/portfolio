import React, { Component } from 'react';
import About from './components/About';
import Work from './components/Work';
import Layout from './components/Layout';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Navigation';
import './App.scss'


function App() {

  return (
  
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
