const express = require('express');
const  router  = express.Router();

router.get('/', (req, res)=>{
    res.json('Welcome to Polling Api');
})
router.use('/questions', require('./question') );
router.use('/options', require('./option'));

module.exports = router;



