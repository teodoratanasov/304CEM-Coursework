var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');


app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


Genre = require('./models/genre');
Game = require('./models/game');
User = require('./models/user');
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

app.get('/api/users', function(req, res){
    User.getUser(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    });
});

app.post('/api/users', function(req, res){
    var user = req.body;
    User.addUser(user, function(err, users){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

app.delete('/api/users/:_id', function(req, res){
    var id = req.params._id;
    var user = req.body;
    User.removeUser(id, user, {}, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

app.listen(3000);
console.log('Running on port 3000...');