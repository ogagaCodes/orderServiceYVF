const { Router } = require("express");
const orderController = require("./order.controller");

const router = Router();
router.post(
  "/create",
  orderController.createOrderController
);



module.exports = router;
