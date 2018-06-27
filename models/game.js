var mongoose = require('mongoose');

// Genre Schema
var gameSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    creator:{
        type: String,
        required: true
    },
    image_url:{
        type: String
    },
    download_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Game = module.exports = mongoose.model('Game', gameSchema);

// Get Game
module.exports.getGames = function(callback, limit){
    Game.find(callback).limit(limit);
}

// Get Game ID
module.exports.getGameById = function(id, callback, limit){
    Game.findById(id, callback);
}

// Add Game
module.exports.addGame = function(game, callback){
    Game.create(game,callback);
}

// Update Game
module.exports.updateGame = function(id, game, options, callback){
    var query = {_id: id};
    var update = {
        title: game.title,
        genre: game.genre,
        description: game.description,
        creator: game.creator,
        image_url: game.image_url,
        download_url: game.download_url
    } 
    Game.findOneAndUpdate(query, update, options, callback);
}

// Delete Game
module.exports.removeGame = function(id, callback){
    var query = {_id: id};
    Game.remove(query,callback);
}