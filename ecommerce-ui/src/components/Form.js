import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

class Form extends React.Component {
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
        return(
            <div className="form">
                This is the form Component
                <button onClick={this.props.toggleForm}>Close</button>
            </div>
        )
    }
}

export default Form;