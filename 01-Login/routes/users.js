var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();

/* GET user profile. */
router.get('/user', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  upStr = JSON.stringify(userProfile,null,2);
  console.log(upStr);
  res.render('user', {
    // userProfile: JSON.stringify(userProfile, null, 2),
    userProfile: upStr,
    title: 'Profile page'
  });
  
});

module.exports = router;
