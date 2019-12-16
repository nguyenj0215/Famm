import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
//import { Link } from 'react-router-dom';
//<Link to="/">Go home</Link>

class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  render() {
    return (
      <div className="container Profile">
        <h1>On the profile page!</h1>
      </div>

    )
  }
}

export default withAuth(Profile);