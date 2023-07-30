const express = require('express');
const  router  = express.Router();

const questionController = require('../contollers/questionsController');

//for adding a new question
router.post('/create', questionController.create);
//for deleting a question
router.delete('/:id/delete',questionController.deleteQuesion);
//for finding a question
router.get('/:id', questionController.findQuestion );

//for adding a new option to question
router.use('/:id/options', require('./option'));

module.exports = router;