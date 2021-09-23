'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      roles.belongsTo(models.user_roles, {
        foreignKey: 'roles_id'
      })
    }
  };
  roles.init({
    description: {
      type: DataTypes.STRING,
      validate: {
        functionValidator: function(value){
          if(value.length < 3){
            throw new Error('O campo descrição deve conter no mínimo 3 caracteres')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'roles',
    paranoid: true
  });
  return roles;
};