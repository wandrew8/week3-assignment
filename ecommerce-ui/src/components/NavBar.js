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

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <header>
                <nav>
                    <h1>Hotels</h1>
                    <div className="iconLinks">
                        <FontAwesomeIcon size="2x" style={{margin: "0rem 1rem"}} icon={faPlusCircle} />
                        <FontAwesomeIcon size="2x" icon={faShoppingCart} />
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavBar;