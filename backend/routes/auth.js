const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const CryptoJs = require('crypto-js');


//REGISTER
router.post('/register' , async (req,res)=>{
  const newUser = new User({   
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.CRYP_PASS)
        .toString()
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        console.log('succes');
    }catch(err){
        res.status(500).json(err);
    }

})
//LOGIN 

router.post('/login' , async (req,res)=>{

    try{
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json('Wrong username');
          }
        const hashedPassword = CryptoJs.AES.decrypt(user.password,process.env.CRYP_PASS);
        const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
        if(originalPassword !== req.body.password )
        {
            res.status(400).json('wrong password');
        } 

        //hide the password from the user
        const {password,...others} =user._doc;
        res.status(200).json(others);
    }catch (err){
        res.status(400).json(err);
    }

})

module.exports = router;