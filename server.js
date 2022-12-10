require('dotenv').config()
const express = require('express');
const PORT = 5000;
const connectDB = require('./config/db');
require('./models/users')
const auth  = require('./routes/auth');
const app = express();


app.use(express.json());
app.use(auth)


connectDB();
app.listen(PORT,()=>{
    console.log("listening on port",PORT);
})