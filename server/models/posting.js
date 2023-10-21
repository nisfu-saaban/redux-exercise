'use strict';
const {
  Model
} = require('sequelize');
const { options } = require('../routes/posting');
module.exports = (sequelize, DataTypes) => {
  class Posting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posting.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Posting.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    isPosting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posting',
  });
  return Posting;
};