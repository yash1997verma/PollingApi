const question = require('../models/question');
const Question = require('../models/question');


module.exports.create = async(req, res)=>{
    try{
        const {question} = req.body;
        const newQuestion = await Question.create({
            question,        

        });
        
        
        res.status(200).json(`Question added, id: ${newQuestion.id}`);

    }catch(err){
        res.status(500).json(`error in creating question ${err}`)
    }
}

module.exports.deleteQuesion = async(req, res)=>{
   try{
    const {id} = req.params;
    const questionToDel = await Question.findById(id);
    //if question not found
    if (!questionToDel) {
        return res.status(404).json('Question not found');
    }
    //don't delete if any option are attached to q
    if (questionToDel.options.length > 0) {
        return res.status(409).json('Cannot be deleted. Options are attached.');
    }
    //else delete
    await Question.deleteOne(questionToDel);
    res.status(200).json('Question deleted successfully.');

   }catch(err){
    res.status(500).json(`error in deleting question ${err}`);
   }
}

module.exports.findQuestion = async(req,res)=>{

    try{
        const {id} = req.params;
        const question = await Question.findById(id).populate('options');
        if(!question){
            return res.status(404).json(`question not found`);
        }
        res.status(200).json(question);

    }catch(err){
        res.status(500).json(`error in finding question ${err}`);
    }
}

