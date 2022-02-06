const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    productTag_id: {
      type: DataType.STRING,
      references: {
        model: 'productTag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  },
  {
    productTag_product_id: {
      type: DataType.INTERGER,
      references: {
        model: 'productTag',
        key: 'product_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  },
  {
    productTag_tag_id: {
      type: DataType.INTERGER,
      references: {
        model: 'productTag',
        key: 'tag_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  },
);

module.exports = ProductTag;
