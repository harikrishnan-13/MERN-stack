//using environment variables
require('dotenv').config();
const express = require('express')

//express app
const app = express();

//Middleware
app.use((req, res, next) =>
{
    console.log(req.path,req.method);
    next();
})

//routes
app.get('/',(req,res)=>{
    res.json({message:"hello world"});
})

//listening on port 4000
app.listen(process.env.PORT,() => {
    console.log('listening on port',process.env.PORT);
})
