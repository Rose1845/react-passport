
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
 

const GOOGLE_CLIENT_ID="1043700949091-hpoll9oisb0vktogs39eu86hdbjc65cd.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"
  

passport.use(new GoogleStrategy({
    scope:['profile'],
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL:'/auth/google/callback',
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)

  }
));
passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})