import React, { Component } from 'react';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import API from "./utils/API";
import Postings from './components/Postings';
import FamilyTable from './components/FamilyTable';
const Auth = new AuthService();

class App extends Component {
  state = {
    username: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
      })
    })
  }

  handleLogout = () => {
    Auth.logout();
    this.props.history.replace('/signup');
  };

  goToEditProfile = () => {
    this.props.history.replace('/profile');
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Postings />
          </div>
          <div className="row">
            <FamilyTable />
          </div>
        </div>

      </div>
    );
  }
}

export default withAuth(App);
