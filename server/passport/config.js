const { Users } = require('../models')
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      console.log('hello')
      console.log(username)

      Users.findOne({ where: { username: username } }).then((user) => {
        if (!user) return done(null, false);

        bcrypt.compare(password, user.password).then( async (result) => {
          if (result === true) {
            console.log('login user')
            console.log(user)
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
      })
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.username);
  });
  passport.deserializeUser((username, cb) => {
    Users.findOne({ where: { username: username } }).then((user) => {
      const userInformation = {
        username: user.username,
      };
      cb('', userInformation);
    });
  })
};