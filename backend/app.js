const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const bodyParser= require('body-parser');

const authRoute = require('./routes/auth');

const tweetRoute = require('./routes/tweet');
const app = express();  // expressed app.

mongoose.connect("mongodb+srv://Opeoluwa:" + process.env.MONOGO_ATLAS_PW + "@cluster0-fhlpa.mongodb.net/Capsule?retryWrites=true&w=majority", { useNewUrlParser: true } ).then(() => { //connection to the database
}).catch(() =>{
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));  // body parser can parse different types of bodies.

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.set("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
});

app.use("/api/auth",authRoute);
app.use("/api/tweets", tweetRoute);
// app.use("/api/notifications",notificationsRoutes);

module.exports = app;
