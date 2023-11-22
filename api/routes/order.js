const express = require('express');
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken');
const Order = require('../models/Order');
const router = express.Router()

router.post('/', verifyToken, async (req,res)=>{

    const newOrder = new Order(req.body);

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});



router.put('/:id', verifyTokenAndAdmin , async (req,res)=>{
    try{
        const updateOrder = await Order.findByIdAndUpdate(
            
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
      
        );
        res.status(200).json(updateOrder);
    }catch (err){
        res.status(500).json(err);
    }
});

router.delete('/:id', verifyTokenAndAdmin, async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Order has been deleted');
    } catch(err) {
        res.status(500).json(err)
    }
   
});

//GET USER orders

router.get('/find/:userId' , verifyTokenAndAuthorization , async (req,res)=>{

    try{
      const order= await Order.findOne(
        {
            userId: req.params.userId
        }
      );
   
      res.status(200).json(order);
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/',verifyTokenAndAdmin, async (req,res)=>{
 
    try{
        const orders = await Order.find();
        res.status(200).json(orders);

    }catch(err){
        res.status(500).json(err)
    }
})

// Get STAT

router.get('stat', verifyTokenAndAdmin, async (req,res)=>{

    const date =new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date(date.setMonth(lastMonth.getMonth()-1)));

    try{
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
              $project: {
                month: { $month: "$createdAt" },
                sales: "$amount",
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: "$sales" },
              },
            },
          ]);
          res.status(200).json(income);

    }catch(err){
        res.status(500).json(err);
    }
})



module.exports=router;