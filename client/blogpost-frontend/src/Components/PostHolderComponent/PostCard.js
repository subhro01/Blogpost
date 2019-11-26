import React from 'react';
import { Link } from 'react-router-dom';
import './Postcard.css';
const PostCards = props => {
    return (
        <div className="card">
            <img 
                src="https://icon-library.net/images/small-icon-images/small-icon-images-11.jpg"
                alt="demo"
                style={{ width: "50%" }}
                />
            <div className="card-container">
                <h3>Some Blog</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipi</p>
                <div className="card-author-readmore">
                    <h4>Auhtor Name</h4>
                    <Link to="/post/1"><button className="card-button">Read More</button></Link>
                </div>
            </div>
        </div>
        
    )
}

export default PostCards;