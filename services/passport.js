const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
            proxy: true
        },
        async(accessToken, refreshToken, profile, done) => {
            const existingUrser = await User.findOne({ googleId: profile.id })
            if (existingUrser) {
                //	Tenemos	un	registro	con	el	ID	del	prefil	proporcionado	
                done(null, existingUrser);
            } else {
                //	No	tenemos	un	registro	de	usuario	con	este	ID,	crear	uno	nuevo	
                const user = await new User({ googleId: profile.id }).save()
                done(null, user);
            }
        }
    )
);