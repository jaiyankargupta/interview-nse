const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");

const bodyParser = require("body-parser");
const cors = require("cors");
const { OrdersModel } = require("./models/OrdersModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authRoute = require("./Routes/AuthRoute");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/allHoldings" ,async (req,res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions" ,async (req,res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
}) 

app.get("/allOrders" ,async (req,res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
}) 

app.post('/newOrder',async (req,res) => {
    let order = new OrdersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,

    });
    order.save();
    res.send("Order saved!!")
});

app.use("/", authRoute); 

app.listen(PORT, async () => {
  console.log("Server Listening");
  await mongoose.connect(uri).then(console.log("Database Connected"));
});  
