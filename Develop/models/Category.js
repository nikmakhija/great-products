const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    costumer_id: {
      type: DataType.INTERGER,
      references: {
        model: 'costumer',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  },
  
  {
  costumer_name: {
    type: DataType.STRING,
    references: {
      model: 'costumer',
      key: 'name'
    }
  }
  },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  },
  );

module.exports = Category;
