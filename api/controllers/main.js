(function(){
  'use strict';

  // Get helper utility
  var dbUtility = require('./../services/dbUtility');
  var mongoose = require('mongoose');
  // Get required models for this express controller
  var User = require('./../models/user');
  var Token = require('./tokens');
  // JSON web token service
  var authSvc = require('./../services/authService');

  exports.index = function(req, res, callback){
    // Get all Users from the database - limiting fields selected
    User.find({}, 'id email first_name last_name user_name city state created_at updated_at',
      function(err, users){
        if(err){
          res.status(300).send(JSON.stringify(err));
        } else {
          callback(users);
        }
      }
    );
  };

  exports.sendMail = function(req, res, callback){
    var params = req.params;
	console.log(params);
	  /*if (id >= 0 && id < data.posts.length) {
		res.json({
		  post: data.posts[id]
		});
	  } else {
		res.json(false);
	  }*/
  };


})();
