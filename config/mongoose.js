const mongoose = require('mongoose');

async function main(){
    try{
        await mongoose.connect('mongodb+srv://root:root@yashdb.ptmfvsc.mongodb.net/pollingApi');
        console.log(`connected to DB`);

    }catch(err){
        console(`error in connecting to Db ${err}`);
    }
}


main();