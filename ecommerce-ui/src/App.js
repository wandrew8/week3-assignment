import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import ShoppingCart from './components/ShoppingCart';
import HotelContainer from './components/HotelContainer';
import Form from './components/Form';
import data from './airbnbs.json'
import './App.scss';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          showCart: false,
          showForm: false,
          cart: [],
      }
    }
    toggleCart = () => {
      this.setState({ showCart: !this.state.showCart })
    }

    toggleForm = () => {
      this.setState({ showForm: !this.state.showForm })
    }

    addToCart = (item) => {
      this.setState({ showCart: true, cart: [...this.state.cart, item]});
    }

    removeItem = (item) => {
      this.setState({ cart: this.state.cart.filter(hotel => hotel.title !== item.title)})
    }

    render() {

      return (
        <div className="mainContainer">
          <NavBar toggleForm={this.toggleForm} toggleCart={this.toggleCart} />
          <div className="mainContent">
            {this.state.showForm && <Form toggleForm={this.toggleForm} />}
            {this.state.showCart && <ShoppingCart items={this.state.cart} removeItem={this.removeItem} toggleCart={this.toggleCart}/>}
            <HotelContainer>
              {data.map(item => <Card key={item.title} addToCart={this.addToCart} data={item} />)}
            </HotelContainer>
          </div>
        </div>
    );
  }
}

export default App;
