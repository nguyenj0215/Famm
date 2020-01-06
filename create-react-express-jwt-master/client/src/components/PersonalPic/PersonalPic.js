import React, { Component } from "react";
import withAuth from './../withAuth';
import API from "../../utils/API";
import './PersonalPic.css';

class PersonalPic extends Component {

    state = {
        username: "",
        personalPic: "",
        inputValue: ""
    };

    componentDidMount() {

        API.getUser(this.props.user.id).then(res => {
            this.setState({
                username: res.data.username,
                personalPic: res.data.picture
            })
        })
    }

    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.getUser(this.props.user.id).then(res => {
            API.addPictureURL(this.state.username, this.state.inputValue)
        });
    };

    render() {
        return (

            <div className='personalPicDiv'>

                <img className='personalPic' id="personalPic" alt="Profile" src={this.state.personalPic ? this.state.personalPic : 'https://img.icons8.com/nolan/64/000000/help--v2.png'}></img>

                <form onSubmit={this.handleFormSubmit}>

                    <input
                        type="text"
                        value={this.state.value}
                        className="form-control"
                        id="pictureUrl"
                        placeholder="Enter a link here to change picture!"
                        onChange={this.handleInputChange}
                    />

                    <button type="submit" className="btn addPictureSubmit">Submit</button>

                </form>
            </div>
        )
    }
}

export default withAuth(PersonalPic);