import React from 'react';
import './Post.css';
const Post = (props) => {
    return (
        <div className="ind_post-container">
            <div className="ind_post-header">
                <h3>TITLE OF THE POST</h3>
                <h4>DATE OF POST</h4>
                <h4>AUTHOR</h4>
            </div>
            <div className="ind_post-body">
                <img src="https://wallpaperplay.com/walls/full/9/9/4/38845.jpg" alt="some alt"/>
                <p>POST CONTENT</p>
            </div>
        </div>
    )
}

export default Post;