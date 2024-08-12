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
    "mongodb+srv://swethashreeg:swethashree@cluster0.emjny3i.mongodb.net/ecommerence"
).then(()=>{
    console.log("Connected to database");
})
app.use("/products",productRoutes);
app.use("/user",userRoutes);
app.use("/cart",cartRoutes);


app.listen(1000,()=>{
    console.log("Server is running on port 3000");
})
 
