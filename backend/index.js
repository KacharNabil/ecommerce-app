const { log } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require('./routes/user.js')
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{ console.log("success")})
    .catch((err)=>{console.log(err);})
;
app.use(express.json());
app.use('/',userRoutes);

app.listen(5000 , ()=>{
 console.log("the server is established");
});