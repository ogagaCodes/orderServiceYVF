const mongoose = require("mongoose");
const axios = require('axios').default;

exports.makeAnOrder = async (res, data) => {
  try {
   
    const order = await axios.post(
      process.env.PAYMENT_SERVICE_URI,
      { data },
      {
        headers: {
          'Content-Type': 'application/json',
      }
      }
    );
    console.log(order);
    return {
      error: false,
      message: "Order placed successfully",
      data: null,
    };
  } catch (err) {
    console.log(err?.response?.data || err);
    return {
      error: true,
      message: "Error making payment",
      data: err?.response?.data || err,
    };
  }
};

