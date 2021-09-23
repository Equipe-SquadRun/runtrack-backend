'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      subjects.belongsToMany(models.evaluation, {
        foreignKey: 'subjects_id'
      })
      subjects.hasOne(models.person, {
        foreignKey: 'person_id'
      })
      subjects.hasOne(models.company, {
        foreignKey: 'company_id'
      })
    }
  };
  subjects.init({
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
    description: DataTypes.STRING,
    file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subjects',
    paranoid: true
  });
  return subjects;
};