var passport = require('passport');
var InstagramStrategy = require('passport-instagram').Strategy;

exports.setup = function(User, config) {
  // console.log(config)
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  passport.use(new InstagramStrategy({
      clientID: config.auth.instagram.clientID,
      clientSecret: config.auth.instagram.clientSecret,
      callbackURL: config.auth.instagram.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      console.log('Obtaining ACCESS_TOKEN: ' + accessToken + ' of user ' + profile.displayName)
      // User.methods.findOrCreate({
      //   instagramID: profile.id
      // }, function(err, user) {
      //   return done(err, user);
      // });
      var newUser = new User({
        instagramID: profile.id
      })
      newUser.findOrCreate({
        instagramID: profile.id
      }, function(err, user) {
        return done(err, user);
      })
    }
  ));
};