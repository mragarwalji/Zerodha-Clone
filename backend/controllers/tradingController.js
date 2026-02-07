const HoldingsModel = require("../model/HoldingsModel");
const PositionsModel = require("../model/PositionsModel");
const OrdersModel = require("../model/OrdersModel");

// Get all holdings
exports.getAllHoldings = async(req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.send(allHoldings);
}

// Get all positions
exports.getAllPositions = async(req, res) => {
  let allPositions = await PositionsModel.find({});
  res.send(allPositions);
}

// Create order
exports.createOrder = async(req, res)=> {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send({message: "Order added successfully"})
}

// Get all orders
exports.getAllOrders = async(req, res)=> {
  let allOrders = await OrdersModel.find({});
  res.send(allOrders);
}

