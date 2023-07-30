const mongoose = require('mongoose');

const {Schema} = mongoose;

const questionSchema = new Schema({
    question: String,
    options: [{ 
        type: Schema.Types.ObjectId, ref: 'option' 
    }],

});

const question = mongoose.model('question', questionSchema);

module.exports = question;


