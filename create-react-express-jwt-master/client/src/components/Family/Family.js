import React, { Component } from "react";
import withAuth from './../withAuth';
import './Family.css';

class Family extends Component {

    render() {
        return (
            <div className='col-sm-12'>
                Family Here
            </div>
        )
    }
}

export default withAuth(Family);