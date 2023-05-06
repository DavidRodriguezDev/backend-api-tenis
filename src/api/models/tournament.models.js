const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tournamentSchema = new Schema(
    {
        name : {type: String, required: true},
        surface : {type: String, required: true},
        city : {type: String, required: true},
        country : {type: String, required: true},
        date : {type: String, required: true},
        month : {type: String, required: true},
        tournamentLogo : {type: String, required: true},
        information : {type: String},
        singles : {type: Number},
        doubles : {type: Number},
        website : {type: String}
    }, {
        timestamps: true
    }
)


const Tournament = mongoose.model("tournament", tournamentSchema);

module.exports = Tournament;    