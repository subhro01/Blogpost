const mongoose = require('mongoose');
const Blog = mongoose.model('blogs');

const createPostHandler = (req, res) => {
    const { author, title, body, author_id } = req.body;
    console.log(req.body);
    new Blog({
        author: author,
        author_id: author_id,
        title: title,
        postbody: body,
        post_date: new Date()
    })
    .save()
    .then(blog => console.log(blog))
    .catch(err => console.log('Unable to create blog'));

}

const fetchUserPostHandler = (req, res) => {
    const { userId } = req.body;
    Blog.findById({ author_id: userId })
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json("Unable to fetch user's posts"));
}

const fetchAllPostHandler = (req, res) => {
    Blog.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json("Unable to return all posts"));
}

module.exports = {
    createPostHandler,
    fetchUserPostHandler,
    fetchAllPostHandler
}