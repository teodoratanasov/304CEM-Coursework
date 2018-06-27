var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genre');
Game = require('./models/game');
//connect to mongodb
mongoose.connect('mongodb://localhost/gameworkshop');
var db = mongoose.connection

app.get('/', function(req, res){
    res.send('Please use 1/api/games');
});

app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.get('/api/games', function(req, res){
    Game.getGames(function(err, games){
        if(err){
            throw err;
        }
        res.json(games);
    });
});

app.get('/api/games/:_id', function(req, res){
    Game.getGameById(req.params._id, function(err, game){
        if(err){
            throw err;
        }
        res.json(game);
    });
});

app.listen(3000);
console.log('Running on port 3000...');