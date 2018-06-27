var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

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

app.post('/api/genres', function(req, res){
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    var genre = req.body;
    Genre.removeGenre(id, genre, {}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
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

app.post('/api/games', function(req, res){
    var game = req.body;
    Game.addGame(game, function(err, game){
        if(err){
            throw err;
        }
        res.json(game);
    });
});

app.put('/api/games/:_id', function(req, res){
    var id = req.params._id;
    var game = req.body;
    Game.updateGame(id, game, {}, function(err, game){
        if(err){
            throw err;
        }
        res.json(game);
    });
});

app.delete('/api/games/:_id', function(req, res){
    var id = req.params._id;
    var game = req.body;
    Game.removeGame(id, game, {}, function(err, game){
        if(err){
            throw err;
        }
        res.json(game);
    });
});


app.listen(3000);
console.log('Running on port 3000...');