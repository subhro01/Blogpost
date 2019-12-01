const passport = require('passport');

module.exports = (app) => {

    // setup the entry point for google authentication
    // asking passport to handle the authentication of google strategy and give access to profile and email(e.g.)
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    // passport will handle the authentication flow using 'google' strategy.
    app.get('/auth/google/callback', 
        passport.authenticate('google'), 
        (req, res) => {
            res.redirect('/');
        });
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}