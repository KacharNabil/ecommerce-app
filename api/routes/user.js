const express = require('express');
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken');
const User = require('../models/User');
const router = express.Router()

router.put('/:id', verifyTokenAndAdmin ,async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.CRYP_PASS
          ).toString();
    };

    try{
        const updateUser = await User.findByIdAndUpdate(
            
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
      
        );
        res.status(200).json(updateUser);
    }catch (err){
        res.status(500).json(err);

    }

});

router.delete('/:id', verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('this user has been deleted');
    } catch(err) {
        res.status(500).json(err)
    }
   
});

router.get('/find/:id' , verifyTokenAndAdmin , async (req,res)=>{

    try{
      const user = await User.findById(req.params.id);
      const { password, ...others} = user._doc;
      res.status(200).json(others);
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/',verifyTokenAndAdmin, async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);

    }catch(err){
        res.status(500).json(err);
    }
})


router.get('/satats' ,verifyTokenAndAdmin,async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports=router;