const mongoose = require('mongoose');

//Self Note: the link can be directly used on front-end to register a vote,
//also we will use the DB objectID, no need for any other id
const optionSchema = new mongoose.Schema({
    questionId: String, 
    id:String,
    option:String,
    votes:Number,
    linkToVote: String,
});

const option = mongoose.model('option', optionSchema);

module.exports = option;

