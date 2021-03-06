const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    tag_id: {
      type: DataType.INTERGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  },
  {
tag_name:{
  type: datatype.STRING,
  references: {
    model: 'tag',
    key: 'name'
  }
}
}
);

module.exports = Tag;
