'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      answers.hasMany(models.evaluation, {
        foreignKey: 'evaluation_id'
      })
    }
  };
  answers.init({
    descriprion: DataTypes.STRING,
    correct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'answers',
    paranoid: true
  });
  return answers;
};