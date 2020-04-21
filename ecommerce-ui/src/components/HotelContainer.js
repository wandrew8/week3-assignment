import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

class HotelContainer extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <section className="hotelContainer">
                {this.props.children}
            </section>
        )
    }
}

export default HotelContainer;