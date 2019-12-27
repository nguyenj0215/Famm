import React, { Component } from "react";
import withAuth from './../withAuth';
import API from "../../utils/API";
import './PersonalPic.css';

const unknownImage = "https://img.icons8.com/nolan/64/000000/help--v2.png";

class PersonalPic extends Component {

    state = {
        username: "",
        personalPic: ""
    };

    componentDidMount() {

        API.getUser(this.props.user.id).then(res => {
            this.setState({
                username: res.data.username,
                personalPic: res.data.personalPic
            })
        })
    }

    render() {
        return (
            <div className='personalPicDiv'>
                <img className='personalPic' alt="Profile" src={this.state.personalPic ? this.state.personalPic : unknownImage}></img>
                <button className='addPic'>Change Picture</button>
            </div>
        )
    }
}

export default withAuth(PersonalPic);