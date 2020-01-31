import React, { Component } from "react";
import withAuth from './../withAuth';
import API from "../../utils/API";
import './Postings.css';

class Postings extends Component {

    state = {
        username: "",
        personalPic: "",
        recentPost: '',
        postings: [],
        family: ""
    };

    componentDidMount() {

        API.getUser(this.props.user.id).then(res => {
            this.setState({
                username: res.data.username,
                personalPic: res.data.picture,
                recentPost: res.data.post,
                family: res.data.family
            })
        });

        API.getRecentPosts(this.props.user.id).then(res => {

            let postingsArr = [];

            for (let i = 0; i < res.data.length; i++) {
                postingsArr.push(res.data[i].post[res.data[i].post.length-1])
            }
            console.log(postingsArr);
        });

    }

    render() {
        return (
            <div className='postingsDiv col-sm-12'>
                Postings Here
                <div className='postings'>
                    
                </div>
            </div>
        )
    }
}

export default withAuth(Postings);