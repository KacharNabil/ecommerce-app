const express = require('express')
const router = express.Router()


router.get('/userTest',(req,res)=>{
    res.send("the test is succesfull")

})



router.post('/usertest1',(req,res) => {
    const username =req.body.username;
    console.log(username);

})

module.exports=router;