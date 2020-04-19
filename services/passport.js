const passport = require('passport')
const Googlestrategy = require('passport-google-oauth20')
const keys = require('../config/keys')


passport.use(new Googlestrategy({
    clientID : keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL : '/auth/google/callback'

}, (accessToken, profile, done)=>{
    console.log(accessToken)
    console.log(profile)
}))
