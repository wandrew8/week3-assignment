import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import ShoppingCart from './components/ShoppingCart';
import HotelContainer from './components/HotelContainer';
import data from './airbnbs.json'
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showCart: true,
        showForm: false,
    }
}
    toggleCart = () => {
      this.setState({ showCart: !this.state.showCart })
    }
    render() {

      return (
        <div>
        <NavBar toggleCart={this.toggleCart} />
        {this.state.showCart ? <ShoppingCart toggleCart={this.toggleCart}/> : null }
        <HotelContainer>
          {data.map(item => <Card data={item} />)}
        </HotelContainer>
      </div>
    );
  }
}

export default App;
