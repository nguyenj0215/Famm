import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import PersonalPic from '../components/PersonalPic';
import Family from '../components/Family';
import Post from '../components/Post';
import '../App.css';

class Profile extends Component {

  state = {
    username: "",
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  /*
  Need to add components for:
  Personal image (need to display image/default, able to add an image)
  Family 
  New Post
  */

  render() {
    return (
      <div className="container ProfilePage">
        <div className="row">
          <div className="col-sm-6">
            <PersonalPic />
          </div>
          <div className="col-sm-6">
            <Family />
          </div>
        </div>
        <div className="row">
          <Post />
        </div>
      </div>

    )
  }
}

export default withAuth(Profile);