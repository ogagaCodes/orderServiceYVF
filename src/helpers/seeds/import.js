const fs = require("fs");

exports.seedProducts = async () => {
    try {
      const Products = require("../../modules/models/product.model");
      const records = await Products.countDocuments();
  
      if (records) {
          console.log("Products already exist in datastore")
        return;
      }
  
      const data = fs.readFileSync(
        `${process.cwd()}/src/helpers/seeds/products.json`,
        "utf8"
      );
  
      await Products.insertMany(JSON.parse(data));
      console.log("products inserted");
    } catch (err) {
      console.log(err);
    }
  };
