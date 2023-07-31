const Option = require('../models/option');
const Question = require('../models/question');

module.exports.createOption = async (req,res)=>{
   try{ 
    const {id} = req.params;
    const {option} = req.body;
    
    const newOption = await Option.create({
        questionId: id,
        option,
        votes: 0,
    });
    //dynamically adding link to vote
    const protocol = req.protocol;
    const host = req.get('host'); 
    const link = `${protocol}://${host}/options/${newOption._id}/add_vote`;
    newOption.linkToVote = link;
    await newOption.save();

    //updating question doc with this option
    const question = await Question.findById(id);
    question.options.push(newOption._id);
    question.save();
    res.status(200).json(`option created, id : ${newOption._id}`);
    
   }catch(err){
    
    console.log(`error in creating new option ${err}`)
    res.status(500).json(`error in creating new option ${err}`)
   }

}

//delete a option
module.exports.deleteOption = async (req,res)=>{
    
    try{
        const {id} = req.params;
        const optionToDelete = await Option.findById(id);
        
        if(!optionToDelete){
            return res.status(404).json('option does not exist');
        }
        //dont delete if option has even one vote
        if(optionToDelete.votes > 0){
            return res.status(409).json('option with votes can not be deleted');
        }
        await Option.deleteOne(optionToDelete);
        
        //also delete option from question
        await Question.updateOne(
            {},
            { $pull: { options: id } },
            { multi: true }
        );
        res.status(200).json('option deleted');
    }catch(err){
        res.status(500).json(`error in deleting option ${err}`)
    }
    
}


//add a vote to a option
module.exports.addVote = async (req,res)=>{
 try{
    const {id} = req.params;
    const optionToAddVote = await Option.findById(id);
    if(!optionToAddVote) res.status(404).json(`option not found`)
    if(optionToAddVote){
        optionToAddVote.votes += 1;
        optionToAddVote.save();
        res.status(200).json("Your Vote added");
    }

 }catch(err){
    res.status(500).json(`error in voting ${err}`);
 }
}