
{/*const dns = require('node:dns');
dns.setServers(['8.8.8.8','8.8.4.4']);
require('dotenv').config()
const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/",(req,res)=>{
    res.send("ShopNest Backend is working proplery");
});
const PORT = process.env.PORT || 5000
const start = async ()=>{
    try{
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port,
            console.log(`server is listening port ${PORT}....`))
        
    }catch(error){
        console.log(error)
    }
}
start()*/}
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();
const express = require("express");
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
// Set CORS frontend URL / allow single-node deploy
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      process.env.FRONTEND_URL,
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/auth',authRoutes);
app.use('/api/products',productRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/payment',paymentRoutes);
app.use('/api/analytics',analyticsRoutes );
//serve fronend in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'));
    });
}else{
app.get("/", (req, res) => {
    res.send("ShopFusion Backend is working properly");
});
}
const PORT = process.env.PORT || 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.error(error);
    }
};
start();
