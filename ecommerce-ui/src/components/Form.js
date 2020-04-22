import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
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
            houseType: '',
            city: '',
            country: '',
            title: '',
            cancellation: false,
            image: '',
            cost: 0,
        }
    }

    handleInputChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }


    render() {
        return(
            <div className={this.props.class ? "form showForm" : "form"}>
                <h2>Add a Listing</h2>
                <button className="close" onClick={this.props.toggleForm}><FontAwesomeIcon icon={faWindowClose} /></button>
                <form>
                    <label htmlFor="houseType">Type of accomodation</label>
                    <select required name="houseType" id="houseType">
                        <option value="Entire House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Private Room">Private Room</option>
                        <option value="Public Room">Public Room</option>
                    </select>

                    <div className="formGroup">
                        <div>
                            <label htmlFor="city">City</label>
                            <input required id="city" name="city" type="text" />
                        </div>
                        <div>
                            <label htmlFor="country">Country</label>
                            <select required name="country" id="country">
                                <option value="USA">United States of America</option>
                                <option value="Canada">Canada</option>
                                <option value="Mexico">Mexico</option>
                            </select>
                        </div>
                    </div>
                    
                    <label htmlFor="title">Describe the property (max 50 characters)</label>
                    <input required id="title" maxLength="50" name="title" type="text" />

                    <label htmlFor="image">Image URL</label>
                    <input required type="url" name="image" />

                    <div className="formGroup">
                        <div>
                            <label htmlFor="cost">Cost per night</label>
                            <input required type="number" name="cost" min="10" step="5" max="1000" />
                        </div>

                        <div className="checkbox">
                            <label htmlFor="cancellation">Allow Free Cancellation?</label>
                            <input required type="checkbox" name="cancellation" />
                        </div>
                    </div>
                    
                    <button className="button">Submit</button>

                </form>
            </div>
        )
    }
}

export default Form;