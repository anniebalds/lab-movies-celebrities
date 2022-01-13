//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// todo : fill the Scheam below !

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
});

const Celebrity = mongoose.model("celebrities", celebritySchema);

module.exports = Celebrity;