const mongoose = require('mongoose');
require('dotenv').config();
async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to DB`);

    }catch(err){
        console(`error in connecting to Db ${err}`);
    }
}


main();