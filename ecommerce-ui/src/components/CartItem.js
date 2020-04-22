import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
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
        const { image, houseType, title, location, payment, host, rating } = this.props.item;
 
        return(
            <div className="cartItem">
                <img src={image} alt={title} />
                <div className="itemDescription">
                    <p>{`${location.city}, ${location.country}`}</p>
                    <p>{title}</p>
                </div>
                <p><em>${payment.cost}</em></p>
                <FontAwesomeIcon onClick={this.props.removeItem.bind(this, this.props.item)} className="trash" icon={faTrashAlt} />
            </div>
        )
    }
}

export default CardItem;