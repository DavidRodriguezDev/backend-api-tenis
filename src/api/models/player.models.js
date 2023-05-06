const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema (
    {
    
    name : {type: String, required: true},
    ranking: {type: String, required: true},
    titles: {type: Number},
    photo: {type: String},
    plays: {type: String, required: true},
    age: {type: Number},
    nationality: {type: String, required: true},
    birthplace: {type: String, required: true},
    coach: {type: String},
    turnedPro: {type: String, required: true},
    weight: {type: String, required: true},
    height: {type: String, required: true}
    
    }, {
        timestamps: true
    }
)

const Player = mongoose.model("player", playerSchema);

module.exports = Player;