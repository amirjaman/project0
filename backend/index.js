const express = require("express");
const dotenv = require("dotenv");
const passport = require('passport')
const session = require('express-session');
const connectDB = require("./src/db/db.connect.js");
const passportConfig = require("./src/config/passportConfig.js");
dotenv.config();
const router = require('./src/routes/auth.js');

const app = express();
const port = 3000;

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', router);
passportConfig();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

connectDB();
