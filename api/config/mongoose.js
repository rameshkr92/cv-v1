(function(){
    'use strict';

    // Connect to database in this file
    var mongoose = require('mongoose');
    var env = process.env.NODE_ENV || 'development';
    console.log('mongoose.js - env:', env);
    var config = require('./config')[env];
    var options = {};

    // Connection to MongoDB
    var connect = function(){
        options = {server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
            replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}}};
        mongoose.connect(config.db, options);
        console.log('\nmongoose.js - connect()... complete\n');
    };

    // Execute connect function
    connect();

    // Error handler
    mongoose.connection.on('error', function(err){
        console.log('\nmongoose.js - Mongoose connection error:', err);
    });

    // Reconnect when closed
    mongoose.connection.on('disconnected', function(){
        console.log('\nmongoose.js - reconnect database\n');
        connect();
    });
})();
