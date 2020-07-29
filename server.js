// Based off of Shawn Van Every's Live Web
// http://itp.nyu.edu/~sve204/liveweb_fall2013/week3.html

// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();

// DB Setup
var mongoose = require('mongoose');
require('./db');
const User = mongoose.model('User');
const Recipe = mongoose.model('Recipe');
var mongoDB = 'mongodb://localhost:3000/mydatabase';
//var mongoDB = 'mongodb://127.0.0.1/mydatabase';
mongoose.connect(mongoDB, {useNewUrlParser: true});
var db = mongoose.connection;
db.once('open', function() {
  console.log("Open for business");
});
// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));


// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io')(server);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {

    console.log("We have a new client: " + socket.id);

    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('recipes',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: 'recipe' " + data.Recipe_Name + " " + data.Recipe_Restrictions + " " + data.Recipe_Serves + " " +
                    data.Recipe_Ingredients + " " + data.Recipe_Procedure + " " + data.Recipe_LowTime
                   + " " + data.Recipe_HighTime + " " + data.Recipe_Cuisine);

        const recipe = new Recipe (
          {Recipe_Name: data.Recipe_Name, Recipe_Restrictions: data.Recipe_Restrictions, Recipe_Ingredients: data.Recipe_Ingredients,
          Recipe_Serves: data.Recipe_Serves, Recipe_Procedure: data.Recipe_Procedure, Recipe_LowTime: data.Recipe_LowTime, Recipe_HighTime: data.Recipe_HighTime,
          Recipe_Cuisine: data.Recipe_Cuisine}
        );
        console.log("Made coordinates");
        recipe.save(function (err, recipe) {
          console.log("We're in");
          if (err) {
            console.log("NOOOOOOO");
          } else {
            console.log("Saved " + recipe);
          }
        });

      socket.on('user',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: 'user' " + data.Token + " " + data.Fridge + " " +
                    data.Recipe_Liked_Recipes);

        const user = new User({Token: data.Token, Fridge: data.Fridge, Recipe_Liked_Recipes: data.Recipe_Liked_Recipes});
        console.log("Made user");
        user.save(function (err, user) {
          console.log("We're in");
          if (err) {
            console.log("NOOOOOOO");
          } else {
            console.log("Saved " + user);
          }
        });

        Recipe.find({Recipe_Name: data.Recipe_Name}, function(res) {
          console.log("Success!");
          console.log(res);
        });

        User.find({Token: data.Token}, function(res) {
          console.log("Success!");
          console.log(res);
        });

        // Send it to all other clients
        socket.broadcast.emit('happy', data);

        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");

      }
    );

    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
);
});
