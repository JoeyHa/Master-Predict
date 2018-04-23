const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },(accessToken, refreshToken,profile , done ) =>{
    console.log('access Token' , accessToken);
    console.log('refresh Token' , refreshToken);
    console.log('profile : ' , profile);
  }
));
//Route Oauth:
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile','email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));



app.use(express.static("src"));

app.get('/', (req, res) => res.sendfile('./src/index.html'));

app.get('/NBA-Predict', (req, res) => res.send('NBA Predict here'));
app.get('/FIFA-Predict', (req, res) => res.send('Fifa predict here'));


const PORT = process.env.PORT || 5000;
app.listen(PORT);
