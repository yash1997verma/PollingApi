const express = require('express');
const app = express();
const port = 8000;



//setting up db
const db = require('./config/mongoose')

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//using express router
app.use('/', require('./routes'));


app.listen(port, (err)=>{
    if(err) console.log(`error in starting the server${err}`);
    console.log(`Server running on ${port}`);
})