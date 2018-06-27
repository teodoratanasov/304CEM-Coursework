var mongoose = require('mongoose');

// Genre Schema
var gameSchema = mongoose.Schema({
    name:{
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