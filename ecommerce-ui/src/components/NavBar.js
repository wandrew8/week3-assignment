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
                    <button style={{margin: "0rem 1rem"}} onClick={this.props.toggleForm}>
                        <FontAwesomeIcon 
                            size="2x"  
                            icon={faPlusCircle} />
                    </button>
                    <button onClick={this.props.toggleCart}>
                        <FontAwesomeIcon 
                            size="2x" 
                            icon={faShoppingCart} />
                    </button>
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavBar;