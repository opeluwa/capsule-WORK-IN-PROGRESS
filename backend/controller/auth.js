const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authModel = require('../model/auth');

function findUser(email, callback){
  authModel.findOne({email: email}).then(data => {
    if(data) {
      callback('Email already exists', null);
    } else {
      callback(null, 'doesnt Exist')
    }
  });
}
exports.signup = (req, res, next) => {
  findUser(req.body.email, function(err, result){
    if(err){
      console.log('user already exists');
      return res.status(400).json({
        message: err
      })
    }

    bcrypt.hash(req.body.password, 10).then(hash => {
      console.log(hash);
      const newUser = authModel({
        email: req.body.email,
        password: hash
      });

      newUser.save().then(() => {
        const token = jwt.sign({email: req.body.email, userId: newUser._id}, process.env.JWT_KEY,
          {expiresIn: '1h'});
        console.log('works');
        return res.status(200).json({
          message: 'success',
          token: token,
          timeLeft: 3600000
        });
      });
    });
  });
};

exports.login = (req, res, next) => {
  let emailFound = false;
  authModel.findOne({email: req.body.email}).then(userData => {
    if (!userData) {
      emailFound = true;
      return ({hashed: null, userId: null});
    }
    return {hashed: bcrypt.compareSync(req.body.password, userData.password), userId: userData._id}; // compare hashes with one another
  }).then( ({hashed, userId}) => {
      if(emailFound) {
        return res.status(401).json({
          message: 'Password or email is incorrect'
        });
      } else if(hashed && !emailFound) {
        console.log('login success');
        const token = jwt.sign({email: req.body.email, userId: userId}, process.env.JWT_KEY,
          {expiresIn: '1h'});
        return res.status(200).json({
          message: 'success',
          token,
          timeLeft: 3600000
        });
      } else {
        console.log('login failed');
        return res.status(401).json({
          message: 'Password or email is incorrect'
        });
      }
  });
};
