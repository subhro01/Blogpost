import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/postAction';
import PostCards from './PostCard';
import './PostHolder.css';
class PostHolder extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    displayPosts = () => {
        return this.props.posts.map(post => 
            <PostCards key={post.id} id={post.id} author={post.userId} body={post.body} title={post.title}/>)
    }

    render() {
        return (
        <div className="postholder-container">
            <Link to="/new_blog" className="create-new-post">Create new Blog</Link>
            { this.displayPosts() }
        </div>
        );
    }
}

const mapStateToProps = state => ({
        posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(PostHolder);