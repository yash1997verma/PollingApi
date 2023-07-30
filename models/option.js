const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    questionId: String, 
    id:String,
    option:String,
    votes:Number,
    linkToVote: String,
});

const option = mongoose.model('option', optionSchema);

module.exports = option;

