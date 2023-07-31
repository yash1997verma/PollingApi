const express = require('express');
const router = express.Router({ mergeParams: true });//mergerParams will allow :id to be accessed here as well
const optionContoller = require('../controllers/optionsController');
//create a option
router.post('/create', optionContoller.createOption);
//add vote to a option
router.post('/:id/add_vote', optionContoller.addVote);
//delete a option
router.delete('/:id/delete', optionContoller.deleteOption);


module.exports = router;