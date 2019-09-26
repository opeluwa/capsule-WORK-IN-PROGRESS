const tweetModel = require('../model/tweet');

exports.newTweet = (req, res, next) => {
  // console.log(req.userData.userId);
  const tweet = tweetModel({
    TweetBody: req.body.TweetBody,
    scheduleType: req.body.scheduleType,
    Reminder: {number: req.body.Reminder.number, unit: req.body.Reminder.unit},
    setDate: req.body.setDate,
    tweetType: {directMessage: req.body.tweetType.directMessage, public: req.body.tweetType.public},
    userNames: req.body.userNames,
    user: req.userData.userId
  });
  console.log(tweet);

  tweet.save().then(data => {
    return res.status(200).json({
      message: 'success',
      postId: tweet._id
    })
  }, err => {
    return res.status(200).json({
      message: 'Failure to Schedule new tweet, please try again later'
    })
  });
};

exports.getTweets = (req, res, next) => {
  tweetModel.find({user: req.userData.userId}).then(posts => {
    console.log(posts);
    return res.status(200).json({
      message: 'success',
      Posts: posts
    })
  }, err => {
    return res.status(404).json({
      message: 'Server error, please try again later'
    })
  })
};
