import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/postAction';
import PostCards from './PostCard';
import './PostHolder.css';
class PostHolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null, 
            is_logged: false
        }
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        console.log('PostHolder', nextProps)
        return { posts: nextProps.posts, is_logged: nextProps.user.is_logged_in }
    }

    displayPosts = () => {
        console.log(this.state.posts);
        return (
            this.props.posts.length === 0 
            ? <div className="first-post"><h3>Be the first one to create post</h3></div>
            : this.props.posts.map(post => 
                <PostCards 
                    key={post._id} 
                    author={post.author} 
                    body={post.postbody} 
                    title={post.title}
                    post_date={post.post_date}
                />
        ));
    }

    render() {
        return (
        <div className="postholder-container">
            {
                !this.state.is_logged  
                    ? <Link to="/login" className="create-new-post"> Login to create post</Link>
                    : <Link to="/new_blog" className="create-new-post">Create new Blog</Link>
            }            
            { this.state.posts !== null ? this.displayPosts(): "Loading" }
        </div>
        );
    }
}

const mapStateToProps = state => ({
        posts: state.posts.items,
        newPost: state.posts.item,
        user: state.logged
})

export default connect(mapStateToProps, { fetchPosts })(PostHolder);