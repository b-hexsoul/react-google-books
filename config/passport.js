const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("../models/index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        email: email,
      }).then(function (dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email.",
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password.",
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_clientId,
      clientSecret: process.env.GOOGLE_clientSecret,
      callbackURL: "http://localhost:3001/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      //check if user already exists in our db with the given profile ID
      db.User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          //if we already have a record with the given profile ID
          done(null, currentUser);
        } else {
          //if not, create a new user
          new db.User({
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
// Exporting our configured passport
module.exports = passport;
