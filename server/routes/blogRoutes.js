const mongoose = require('mongoose');
const Blogs = mongoose.model('blogs');

module.exports = (app) => {

    // Route for fetching all the post - the root route
    app.post('/api', (req, res) => {
        Blogs.find()
    })

}