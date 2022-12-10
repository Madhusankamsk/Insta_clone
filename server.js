require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');
require('./models/users')
require('./models/post')
const auth  = require('./routes/auth');
const post  = require('./routes/post');
const app = express();


app.use(express.json());
app.use(auth)
app.use(post)


connectDB();
app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT);
})