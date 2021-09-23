'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_roles.hasOne(models.users, {
        foreignKey: 'users_id'
      })
      users_roles.hasOne(models.roles, {
        foreignKey: 'roles_id'
      })
    }
  };
  users_roles.init({
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
    modelName: 'users_roles',
    paranoid: true
  });
  return users_roles;
};