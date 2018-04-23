const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());


app.use(express.static("src"));

app.get('/', (req, res) => res.sendfile('./src/index.html'));

app.get('/NBA-Predict', (req, res) => res.send('NBA Predict here'));
app.get('/FIFA-Predict', (req, res) => res.send('Fifa predict here'));


const PORT = process.env.PORT || 5000;
app.listen(PORT);
