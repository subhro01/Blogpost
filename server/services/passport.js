const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User  = mongoose.model('user');
// Need to pass the callback route once google verifies the detail of user

// Use this function to create cookies for the user
passport.serializeUser((user, done) => {
    done(null, user.id);
})
// passport sends the id which it will get from the cookieSession which then pass in this function
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user)); // Tell deserialize convert from id to model
})
passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        // Accesstoken - given for temporary access for user profile // console.log('AccessToken', accessToken);
        // RefreshToken - refresh the accessToken after certain time // console.log('RefreshToken', refreshToken);
        // profile - contains information about the user // console.log('profile', profile);
        User.findOne({ c_id: profile.id })
            .then((exisitingUser) => {
                if(exisitingUser) {
                    // Do not create a new user
                    done(null, exisitingUser); // done(error, message)
                } else {
                    // Create a new User
                    new User({ c_id: profile.id, strategy: 'google', name: profile.displayName })
                        .save()
                        .then(user => done(null, user));
                }
            })
        
    })
)