'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      link.hasMany(models.person, {
        foreignKey: 'person_id'
      })
      link.hasMany(models.company, {
        foreignKey: 'company_id'
      })
      link.hasMany(models.status, {
        foreignKey: 'status_id'
      })
    }
  };
  link.init({
    description: {
      type: DataTypes.STRING,
      validate: {
        functionValidator: function(value){
          if(value.length < 3){
            throw new Error('O campo link deve conter no mínimo 3 caracteres')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'link',
    paranoid: true
  });
  return link;
};