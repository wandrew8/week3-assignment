import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../App.scss';

class NavBar extends React.Component {
    static propTypes = {
        countFrom: PropTypes.number
    }
    static defaultProps = {
        countFrom: 10
    }

    
    render() {
        return(
            <header>
                <nav>
                    <h1>Hotels</h1>
                    <div className="iconLinks">
                    <button onClick={this.props.toggleForm}>Add Hotel</button>
                    <button onClick={this.props.toggleCart}>Shopping Cart</button>
                        <FontAwesomeIcon 
                            onClick={this.props.toggleCart}
                            size="2x" 
                            style={{margin: "0rem 1rem"}} 
                            icon={faPlusCircle} />
                        <FontAwesomeIcon size="2x" icon={faShoppingCart} />
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavBar;