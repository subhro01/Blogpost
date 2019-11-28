import React from 'react';
import { Link } from 'react-router-dom';
import './Postcard.css';
const PostCards = ({ id, userId, title, body }) => {
    
    return (
        <div className="card" key={id}>
            <img 
                src="https://icon-library.net/images/small-icon-images/small-icon-images-11.jpg"
                alt="demo"
                style={{ width: "50%" }}
                />
            <div className="card-container">
                <h3>{ title }</h3>
                <p>{ body.length > 20 ? body.substring(0, 10) + '...' : body }</p>
                <div className="card-author-readmore">
                    <h4>{ userId }</h4>
                    <Link 
                        to={{
                            pathname: `/post/${id}`,
                            state: { id, title, body, userId}
                        }}>
                        <button className="card-button">Read More</button></Link>
                </div>
            </div>
        </div>
        
    )
}

export default PostCards;