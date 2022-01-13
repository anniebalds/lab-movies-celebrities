//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// todo : fill the Scheam below !

const MovieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [
        {type: Schema.Types.ObjectId, 
        ref: "celebrities" }
    ],
});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;