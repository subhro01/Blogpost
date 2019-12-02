const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = (app) => {
    app.post('/api/register', (req, res) => {
        console.log('REQ', req.body)
        res.json("success");
    })
}