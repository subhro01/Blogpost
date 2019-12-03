import React from 'react';
import { Link } from 'react-router-dom';
import './Postcard.css';
const PostCards = ({ _id, author, title, body, post_date }) => {
    return (
        <div className="card">
            <img 
                src="https://icon-library.net/images/small-icon-images/small-icon-images-11.jpg"
                alt="demo"
                style={{ width: "50%" }}
                />
            <div className="card-container">
                <h3>{ title }</h3>
                <p>{ body.length > 20 ? body.substring(0, 10) + '...' : body }</p>
                <div className="card-author-readmore">
                    <h4>{ author }</h4>
                    <Link 
                        to={{
                            pathname: `/post/${_id}`,
                            state: { _id, title, body, author, post_date }
                        }}>
                        <button className="card-button">Read More</button></Link>
                </div>
            </div>
        </div>
        
    )
}

export default PostCards;