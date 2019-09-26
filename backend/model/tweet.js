const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const tweetSchema = mongoose.Schema({
  TweetBody: {type: String, required: true},
  scheduleType: {type: Number, required: true},
  Reminder: {type: {number: Number, unit: String}, required: false},
  setDate: {type: Number, required: false},
  tweetType: {type: {directMessage: Boolean, public: Boolean}, required: true},
  userNames: {type: [String], required: false},
  user: {type: String, required: true}
});

tweetSchema.plugin(uniqueValidator);
module.exports = mongoose.model('tweet', tweetSchema);
