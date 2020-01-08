import React, { Component } from "react";
import withAuth from './../withAuth';
import './Family.css';
import API from "../../utils/API";

class Family extends Component {

    state = {
        username: "",
        familyName: "",
        inputValue: ""
    };

    componentDidMount() {

        API.getUser(this.props.user.id).then(res => {
            this.setState({
                username: res.data.username,
                familyName: res.data.family
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
            API.addFamily(this.state.username, this.state.inputValue)
        });
    };

    render() {
        return (
            <div className='familyAddDiv'>
                <form onSubmit={this.handleFormSubmit}>

                    <div className='familyNameDisplay'>Hello {this.state.username}! You are currently {this.state.familyName ? `connected to the ${this.state.familyName} family!` : "Not connected to any family. Join one to get started!"}</div>

                    <input
                        type="text"
                        value={this.state.value}
                        className="form-control"
                        id="familyName"
                        placeholder="Enter the name of your family!"
                        onChange={this.handleInputChange}
                    />

                    <button type="submit" className="btn addFamilySubmit">Submit</button>

                </form>
            </div>
        )
    }
}

export default withAuth(Family);