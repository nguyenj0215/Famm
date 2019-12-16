import React, { Component } from "react";
import AuthService from '../AuthService';
import './Postings.css';

class Postings extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    render() {
        return (
            <div className='postings col-sm-12'>
                Postings Here
            </div>
        )
    }
}

export default Postings;