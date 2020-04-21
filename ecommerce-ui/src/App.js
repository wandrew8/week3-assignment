import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import ShoppingCart from './components/ShoppingCart';
import HotelContainer from './components/HotelContainer';
import data from './airbnbs.json'
import './App.scss';

function App() {
  return (
    <div>
      <NavBar />
      <div className="mainContainer">
        <ShoppingCart />
        <HotelContainer>
          {data.map(item => <Card data={item} />)}
        </HotelContainer>
      </div>
    </div>
  );
}

export default App;
