import React, { Component } from "react";
import withAuth from './../withAuth';
import './Post.css';
import API from "../../utils/API";

class Post extends Component {

    state = {
        username: "",
        recentPost: "",
        inputValue: "",
        familyName: ""
    };

    componentDidMount() {

        API.getUser(this.props.user.id).then(res => {
            this.setState({
                username: res.data.username,
                familyName: res.data.family
            })
        })
    }

    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.getUser(this.props.user.id).then(res => {
            API.addPost(this.state.username, this.state.inputValue)
        });
    };

    render() {
        return (
            <div className='postAddDiv'>
                <form onSubmit={this.handleFormSubmit}>

                    <textarea
                        value={this.state.value}
                        className="form-control"
                        id="postingTextBox"
                        placeholder="Leave a post for your family to see!"
                        onChange={this.handleInputChange}
                    />

                    <button type="submit" className="btn addPostSubmit">Submit</button>

                </form>
            </div>
        )
    }
}

export default withAuth(Post);