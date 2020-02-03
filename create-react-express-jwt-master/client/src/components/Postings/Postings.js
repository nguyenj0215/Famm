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
            this.setState({
                postings: res.data
            })
        });

    }

    render() {
        return (
            <div className='postingsDiv col-sm-12'>
                Postings Here
                <div className='postings'>
                    {/* {this.state.postings.map(posts => (
                        < PostBoxes
                        key={posts.id}
                        id={posts.id}
                        image = {posts.picture}
                        username = {posts.username}
                        post = {posts.post[posts.post.length-1]}
                        />
                    ))} */}
                </div>
            </div>
        )
    }
}

export default withAuth(Postings);