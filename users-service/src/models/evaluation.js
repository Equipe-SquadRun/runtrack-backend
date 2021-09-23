'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evaluation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      evaluation.belongsToOne(models.grades, {
        foreignKey: 'evaluation_id'
      })
      evaluation.hasOne(models.subjects, {
        foreignKey: 'subjects_id'
      })
    }
  };
  evaluation.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        functionValidator: function(value){
          if(value.length < 3){
            throw new Error('O campo nome deve conter no mínimo 3 caracteres')
          }
        }
      }
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'evaluation',
    paranoid: true
  });
  return evaluation;
};