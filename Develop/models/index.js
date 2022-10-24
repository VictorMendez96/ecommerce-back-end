// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product

// Categories have many Products
Category

// Products belongToMany Tags (through ProductTag)
Product

// Tags belongToMany Products (through ProductTag)
Tag

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
