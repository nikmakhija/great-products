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
    type: DataTypes.INTERGER,
    allowNULL: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
  type: DataTypes.DECIMAL,
  allowNull: false,
  validate: {
    value: decimal
  },
  },
  stock: {
    type: DataTypes.INTERGER,
    allowNull: false,
    defaultValue: 10,
    validate: {
      value: numeric
    }
  },
  category:{
    type: DataTypes.INTERGER
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
