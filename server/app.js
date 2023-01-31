const express = require('express');
const { get } = require('mongoose');
const app = express();
const routers = require('./routes/crud');
const mongoose = require('mongoose');
require('dotenv').config();
// Mongo Connection

mongoose.connect(process.env.MONGODB_URL,(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Database connected");
    }
});


//Logger Middleware to log the requests
const LoggerMiddleware = (req, res, next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
    next();
  };

//  Middlewares
app.use(LoggerMiddleware);
app.use('/', routers.home);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server started on port 3000`);
})