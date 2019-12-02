const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    author: String,
    author_id: String,
    title: String,
    postbody: String,
    post_date: Date,
    imageUrl: String
});

mongoose.model('blogs', BlogSchema);