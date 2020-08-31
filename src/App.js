import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import {StyledParticles} from './Components/StyledParticles';

function App() {
  return (
    <div className="App">
      <StyledParticles/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
