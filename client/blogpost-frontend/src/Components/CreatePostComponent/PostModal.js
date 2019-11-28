import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../../actions/postAction';
import './PostModal.css';

class PostModal extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            postbody: '',
            author: '',
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.postbody,
            author: this.state.author
        }
        this.props.createPost(post);
        console.log(this.props.newPost);
    }

    onTitleChange = (e) => this.setState({ title: e.target.value });
    onBodyChange = (e) => this.setState({ postbody: e.target.value });

    render() {
        return (
            <div className="create-post-modal-container">
                <Link to='/'>
                    <button className="post-back">&#8592;</button>
                </Link>
                <div className="post-container">
                    <div className="post-header">
                        <h3>Create a new post</h3>
                    </div>
                    <div className="post-body">
                        <form action="" onSubmit={this.onSubmitForm} className="post-form-body">
                            <input type="text" name="author" value={this.props.author} disabled/>
                            <input type="text" name="title" onChange={this.onTitleChange} placeholder="TITLE" required/>
                            <button className="upload-button">Uploaad image - feature coming soon</button>
                            <textarea name="postbody" onChange={this.onBodyChange} placeholder="POST" required/>
                            <button type="submit" className="post-submit-button">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newPost: state.posts.item
})

export default connect(mapStateToProps, { createPost })(PostModal);