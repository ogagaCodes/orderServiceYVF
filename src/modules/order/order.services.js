const mongoose = require("mongoose");
const axios = require('axios').default;
const Product = require("../models/product.model");

exports.makeAnOrder = async (data) => {
  try {
    //  check if product exist
    console.log(data)
   const product = await Product.findOne({product_name: data.data.product_name});
   console.log("product: ", product)
   if(!product){
     return {
       error: true,
       message: "Product Does Not Exist",
       data:null
     }
   }
   if(product.quantity_in_stock < data.data.quantity){
     return {
       error: true,
       message: "Qunatity of product is not available",
       data: null
     }
   }
   console.log("PAYMENT_URI: ", process.env.PAYMENT_SERVICE_URI)
   const Data = data.data;
    const order = await axios.post(
      process.env.PAYMENT_SERVICE_URI,
      Data,
      {
        headers: {
          'Content-Type': 'application/json',
          // "Access-Control-Allow-Origin": "*"
      }
      }
    );
    console.log("ORDER:", order);
    return {
      error: false,
      message: "Order placed successfully",
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error placing your order, try again",
      data: err?.response?.data || err,
    };
  }
};

