const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    c_id: String,
    strategy: String,
    name: String,
    email: String,
    password: String
});

mongoose.model('user', userSchema);