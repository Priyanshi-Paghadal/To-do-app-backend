const express = require('express');
const port = 8001;
const app = express();
const cors = require('cors');
const db = require('../backEnd/config/mongoose');

app.use(express.json());

const corsOptions = {
    origin: 'https://to-do-app-cyan-seven.vercel.app/',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));

app.use('/api/todo' , require('../backEnd/router/todoRouter'));

app.listen(port,(err)=>{
    if(err){
        console.log("server Is Not Conneted Please Try AGian",err);
        return false;
    }
    console.log("Server Is Connected Succssfully",port);
});