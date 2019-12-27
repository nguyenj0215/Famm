import React, { Component } from "react";
import withAuth from './../withAuth';
import './Post.css';

class Post extends Component {

    render() {
        return (
            <div className='col-sm-12'>
                Post Here
            </div>
        )
    }
}

export default withAuth(Post);