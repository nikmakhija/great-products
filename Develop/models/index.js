// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
{
  productName: 'product 01'
  categories:
  [{categoryName: 'category 02'},
  {categoryName: 'category 42'}]
};

// Categories have many Products
Category.hasMany(Product, {
foreignKey: 'category_id',
onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
Product.belongTo(Tag, {
foreignKey: 'tag_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongTo(Product, {
  foreignKey: 'product_id'
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
