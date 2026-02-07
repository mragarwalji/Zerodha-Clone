const express = require("express");
const router = express.Router();

const {
  getAllHoldings,
  getAllPositions,
  createOrder,
  getAllOrders
} = require("../controllers/tradingController");

router.get("/allHoldings", getAllHoldings);
router.get("/allPositions", getAllPositions);
router.post("/newOrder", createOrder);
router.get("/allOrders", getAllOrders);

module.exports = router;
