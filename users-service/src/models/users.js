'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {      
      users.belongsToMany(models.user_roles, {
        foreignKey: 'users_id'
      })
    }
  };
  users.init({
    login: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'O E-mail digitado é inválido'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        functionValidator: function(value){
          if(value.length < 8){
            throw new Error('O campo senha deve conter no mínimo 8 caracteres')
          }
        }        
      }
    }
  }, {
    sequelize,
    modelName: 'users',
    paranoid: true
  });
  return users;
};