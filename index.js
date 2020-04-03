const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require("./config/keys");
require('./models/Users');
require('./services/passport');

mongoose.connect(
        keys.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }
    ).then(() => console.log("Conexión	establecida con exito"))
    .catch(err => console.log(err));

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// https: //fathomless-garden-79886.herokuapp.com/
// https: //git.heroku.com/fathomless-garden-79886.git
// https: //git.heroku.com/fathomless-garden-79886.git