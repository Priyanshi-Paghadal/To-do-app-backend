const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/TodoList');

const db = mongoose.connection;

db.once('open',(err)=>{
    if(err){
        console.log("Something is Wrong DB not Connected",err);
        return false;
    }
    console.log("DB Connected Successfully");
});

module.exports = db;