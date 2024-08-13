const express =  require("express");
const productRoutes=require("./routes/productRoutes")
const userRoutes=require("./routes/userRoutes")
const cartRoutes=require("./routes/cartRoutes")
const cors = require("cors")
// const orderRoutes=require("./routes/orderRoutes")
const app=express();

const mongoose=require('mongoose');
app.use(express.json());
app.use(cors());
mongoose.connect(
    "mongodb+srv://swethashreeg2022eee:sw12et34@cluster0.i2mep.mongodb.net/ecommerence"

).then(()=>{
    console.log("Connected to database");
})
app.use("/products",productRoutes);
app.use("/user",userRoutes);
app.use("/cart",cartRoutes);


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
 
