const { log } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require('./routes/user.js');
const authRoutes = require('./routes/auth.js');
const cartRoutes = require('./routes/cart.js');
const orderRoutes = require('./routes/order.js');
const productRoutes = require('./routes/product.js');
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{ console.log("success")})
    .catch((err)=>{console.log(err);})
;
app.use(express.json());
app.use('/',userRoutes);
app.use('/auth',authRoutes);
app.use('/cart',cartRoutes);
app.use('/order',orderRoutes);
app.use('/user',userRoutes);
app.use('/product',productRoutes);


app.listen(5000 , ()=>{
 console.log("the server is established");
});