import React, { Component } from "react";
import AuthService from '../AuthService';
import './FamilyTable.css';

class FamilyTable extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    render() {
        return (
            <div className='familyTable col-sm-12'>
                Family Table Here
            </div>
        )
    }
}

export default FamilyTable;