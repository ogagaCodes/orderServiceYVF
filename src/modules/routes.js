const { Router } = require("express");
const order = require("./order/order.routes");

module.exports = () => {
  const router = Router();

  router.use("/", order);
  return router;
};
