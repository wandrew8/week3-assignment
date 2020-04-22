import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';
import '../App.scss';

class Card extends React.Component {
    // static propTypes = {
    //     countFrom: PropTypes.number
    // }
    // static defaultProps = {
    //     countFrom: 10
    // }

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const { image, houseType, title, location, payment, host, rating } = this.props.data
        return(
            <div className="card">
                <div className="imageContent">
                    <Rating rating={rating} />
                    <img src={image} alt={title} />
                    {payment.description ? <div className="description">{payment.description}!</div> : null}
                </div>
                <div className="cardContent">
                  <h3>{houseType}</h3>  
                  <p>{`${location.city}, ${location.country}`}</p>
                  <p>{title}</p>
                  <p><em>${payment.cost}</em> / night</p>
                </div>
            </div>
        )
    }
}

export default Card;