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
    }
}
    toggleCart = () => {
      this.setState({ showCart: !this.state.showCart })
    }

    toggleForm = () => {
      this.setState({ showForm: !this.state.showForm })
    }

    render() {

      return (
        <div>
        <NavBar toggleForm={this.toggleForm} toggleCart={this.toggleCart} />
        {this.state.showForm && <Form toggleForm={this.toggleForm} />}
        {this.state.showCart && <ShoppingCart toggleCart={this.toggleCart}/>}
        <HotelContainer>
          {data.map(item => <Card data={item} />)}
        </HotelContainer>
      </div>
    );
  }
}

export default App;
