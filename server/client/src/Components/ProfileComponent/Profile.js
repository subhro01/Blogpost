import React, { Component } from 'react';
import PostCards from '../PostHolderComponent/PostCard';
import { connect } from 'react-redux';


import './Profile.css';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    showAuthorPosts = () => {
                
        return (
            <div className="profile_posts">
                this is a post
            </div>
        );
    }

    render() {
        const { name, id } = this.props.user.loggedin_user;
        return (
            <div className="profile-container">
                <div className="profile-author-container">
                    <img 
                        src="https://cdn1.iconfinder.com/data/icons/rcons-user-action/512/user-512.png" 
                        alt="show some icon"
                    />
                    <h2>{ name }</h2>
                </div>
                <div className="profile-author-posts-container">
                    { this.showAuthorPosts() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.logged
})

export default connect(mapStateToProps)(Profile);