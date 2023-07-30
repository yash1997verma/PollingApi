const express = require('express');
const  router  = express.Router();

router.use('/questions', require('./question') );
router.use('/options', require('./option'));

module.exports = router;


//routes to be created



// -  (To delete an option)
// - /options/:id/add_vote (To increment the count of votes)
