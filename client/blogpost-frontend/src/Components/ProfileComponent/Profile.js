import React, { Component } from 'react';
import PostCards from '../PostHolderComponent/PostCard';

import './Profile.css';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    showAuthorPosts = () => {
        console.log("THIS SHOULD SHOW POSTS");
        return (
            <div className="profile_posts">
                <PostCards auhtor="subhro"/>
                <PostCards auhtor="subhro"/>
                <PostCards auhtor="subhro"/>
                <PostCards auhtor="subhro"/>
            </div>
        );
    }

    render() {
        return (
            <div className="profile-container">
                <div className="profile-author-container">
                    <img 
                        src="https://cdn1.iconfinder.com/data/icons/rcons-user-action/512/user-512.png" 
                        alt="show some icon"
                    />
                    <h2>AUHTOR NAME</h2>
                </div>
                <div className="profile-author-posts-container">
                    { this.showAuthorPosts() }
                </div>
            </div>
        )
    }
}

export default Profile;