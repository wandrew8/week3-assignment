import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

class CardItem extends React.Component {
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
            <div></div>
        )
    }
}

export default CardItem;