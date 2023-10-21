'use strict';
const { encrypt } = require('../helper/bcrypt')
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
      User.hasMany(models.Posting, { foreignKey: 'userId' })
      User.hasMany(models.experience, { foreignKey: 'userId' })
      User.hasOne(models.Profile, { foreignKey: 'userId' })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'Please enter username'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'Please enter email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'Please enter password'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, Options) => {
        User.password = encrypt(User.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};