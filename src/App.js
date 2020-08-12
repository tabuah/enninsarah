import React from 'react';
import './App.css';
import HeaderComponents from './components/HeaderComponents';
import NavbarComponents from "./components/NavbarComponents";

function App() {
  return (
    <div className="mycontainer">
    <HeaderComponents/>
    <NavbarComponents/>
    </div>
  );
}

export default App;
