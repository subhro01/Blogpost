const mongoose = require('mongoose');
const User = mongoose.model('user');
const uuid = require('uuid/v4');
const bcrypt = require('bcrypt');

const registerHandler = (req, res) => {
    const { name, email, password } = req.body;

    const hash = bcrypt.hashSync(password, 512);

    User.findOne({ email: email })
        .then(existingUser => {
            if(existingUser) {
                res.json({ "apiOutput": 'User already exists' });
            } else {
                new User({
                    c_id: uuid(),
                    name: name,
                    email: email,
                    password: hash,
                    strategy: 'email'
                })
                .save()
                .then(user => res.json({
                    "apiOutput": "success",
                    "name": user.name,
                    "email": user.email,
                    "id": user.c_id
                }))
                .catch(err => res.status(400).json({ "apiOutput": 'Unable to create user' }))
            }
        });

}

module.exports = {
    registerHandler
}