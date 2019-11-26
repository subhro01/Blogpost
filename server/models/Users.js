const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    c_id: String,
    strategy: String,
    name: String
});

mongoose.model('user', userSchema);