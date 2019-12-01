const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');

require('./models/Users');
require('./services/passport'); // it is not returing anything hence no need of assigning

mongoose.connect(keys.mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());

// Setup the cookie session
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 1000, // Time till the cookie will be alive
    keys: [keys.cookieKey]
}));


app.use(morgan('combined'));
// Make passport know to use the cookieSession
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // authRoute returing a function and we are immediatly invoking that function

const PORT = process.env.PORT || 5000;
app.listen(5000);