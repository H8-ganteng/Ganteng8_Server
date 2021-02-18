'use strict';
const {hashPass} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username is Required'
        }
      },
      unique: {
        args: true,
        msg: 'Username is Already Used!'
      }
    },
    points: DataTypes.INTEGER,
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: 'Password is Required!'
        },
        len:{
          args: [8],
          msg: 'Must Contain At Least 8 Characters'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate : (user, options)=>{
        user.password = hashPass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};