// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

/*
id
product_name
price
stock
category
*/
Product.init(
{
  id: {
    type: DataTypes.STRING
  },
  product_name: {
    type: DataTypes.STRING
  },
  price: {
  type: DataTypes.INTERGER
  },
  stock: {
    type: DataTypes.INTERGER
  },
  catagory:{
    type: DataTypes.STRING
  },
}
)
// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_id: {
      type: DataType.STRING,
      references: {
        model: 'product',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
