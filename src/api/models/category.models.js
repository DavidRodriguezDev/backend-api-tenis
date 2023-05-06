const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        category: {type: String, required: true},
        points: {type: Number, required: true},
        atpLogo: {type: String, required: true},
        tournaments : [{type: Schema.Types.ObjectId, ref: "tournament"}]
       
    }, {
        timestamps:  true
    }
)

const Category = mongoose.model("category", categorySchema);

module.exports = Category;