import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

class ShoppingCart extends React.Component {
    static propTypes = {
        countFrom: PropTypes.number
    }
    static defaultProps = {
        countFrom: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <aside>
                <h2>Shopping Cart</h2>
                <button onClick={this.props.toggleCart}>Hide Cart</button>
            </aside>
        )
    }
}

export default ShoppingCart;