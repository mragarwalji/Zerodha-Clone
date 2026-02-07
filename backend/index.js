require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const uri = process.env.Mongo_URL;
const HoldingsModel = require('./model/HoldingsModel');
const PositionsModel = require('./model/PositionsModel');
const OrdersModel = require('./model/OrdersModel');
const cors = require('cors');
const bodyParser = require('body-parser');


// Connecting to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB Connected Successfully to Zerodha Clone Database");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// app.get("/addHoldings", async (req, res) => {

//   let temHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//      {
//       name: "Krish",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//   ];

//   temHoldings.forEach((item)=> {
//     let newHolding = new HoldingsModel({
//        name: item.name,
//        qty: item.qty,
//        avg: item.avg,
//        price: item.price,
//        net: item.net,
//        day: item.day,
//     });
//     newHolding.save();
//   })
//   res.send({message: "Holdings added successfully"})
// });


// Starting the server

// app.get("/addPostions", async (req, res) => {
//   let temPositions = [
//     {
//       product: "CNEC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNCF",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   temPositions.forEach((item)=> {
//     let newPostion = new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//     })
//     newPostion.save();
//   })
//   res.send({message: "Positions added successfully"})
// });

app.get('/allHoldings', async(req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.send(allHoldings);
})

app.get('/allPositions', async(req, res) => {
  let allPositions = await PositionsModel.find({});
  res.send(allPositions);
})

app.post('/newOrder', async(req, res)=> {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send({message: "Order added successfully"})
})

app.get('/allOrders', async(req, res)=> {
  let allOrders = await OrdersModel.find({});
  res.send(allOrders);
})


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})