const express = require('express');
const router = express.Router();
const tweetController = require('../controller/tweet');
const checkAuth = require('../middleware/check-auth');
module.exports = router;

router.post("/newTweet", checkAuth, tweetController.newTweet);
router.get("/getTweets", checkAuth, tweetController.getTweets);
