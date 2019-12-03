import React from 'react';
import './Post.css';
const Post = (props) => {
    console.log(props);
    const { _id, title, body, author, post_date } = props.location.state;
    return (
        <div className="ind_post-container">
            <div className="ind_post-header">
                <h3>{ title }</h3>
                <h4>{ post_date }</h4>
                <h4>{ author }</h4>
            </div>
            <div className="ind_post-body">
                <img src="https://wallpaperplay.com/walls/full/9/9/4/38845.jpg" alt="some alt"/>
                <p>{ body }</p>
            </div>
        </div>
    )
}

export default Post;