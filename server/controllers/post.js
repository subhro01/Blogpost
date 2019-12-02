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

module.exports = {
    createPostHandler
}