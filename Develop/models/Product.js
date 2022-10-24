// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true,
    },
    product_name: {
      type: Datatypes.STRING, 
      allowNull: false
    },
    price: {
      type: Datatypes.DECIMAL,
      allowNull: false, 
      defaultValue: 10,
      validate: {
        
      }
    },
    stock: {
      type: Datatypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {

      }
    },
    category_id: {
      type: Datatypes.INTEGER,
      references: {

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
