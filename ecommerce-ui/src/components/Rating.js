import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, farFasStar } from '@fortawesome/free-solid-svg-icons'; 
import PropTypes from 'prop-types';
import '../App.scss';

class Rating extends React.Component {
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
        const { stars, reviews } = this.props.rating;
        let propsArray = []
        for (let i = 1; i <= parseInt(stars); i++) {
            propsArray.push("full");
        }
        
        return(
            <div className="rating">
                {propsArray.map(star => {
                    if (star === "full") {
                        return <FontAwesomeIcon icon={faStar} />
                    }
                })}
                {` ${stars} (${reviews})`}
            </div>
        )
    }
}

export default Rating;