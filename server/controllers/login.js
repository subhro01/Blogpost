const mongoose = require('mongoose');
const User = mongoose.model('user');
const bcrypt = require('bcrypt');

const loginHandler = (req, res) => {
    
    const { email, password } = req.body;

    
    User.findOne({email : email})
        .then(user => {
            bcrypt.compare(password, user.password)
                .then(exists => {
                    if(exists) {
                        console.log(exists);
                        req.session.user = user.id
                        console.log(user.id);
                        console.log(req.session.user);
                        res.json({
                            "apiOutput": "logged in",
                            "id": user.id,
                            "name": user.name
                        })
                    } else {
                        res.json({ "apiOutput": "Invalid user name or password" })
                    }
                })
        })
        .catch(err => res.status(400).json({ "apiOutput": "Error logging in" }));

}

module.exports = { loginHandler };