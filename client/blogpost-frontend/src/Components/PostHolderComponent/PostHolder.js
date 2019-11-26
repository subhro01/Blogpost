import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostCards from './PostCard';
import './PostHolder.css';
class PostHolder extends Component {

    componentDidMount() {
        console.log("DID MOUNT CALLED FROM POSTHOLDER");
    }

    render() {
        return (
        <div className="postholder-container">
            <Link to="/new_blog" className="create-new-post">Create new Blog</Link>
            <PostCards name="john"/>
            <PostCards name="john"/>
        </div>
        );
    }
}

export default PostHolder;