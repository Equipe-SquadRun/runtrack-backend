'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      person.belongsTo(models.link, {
        foreignKey: 'person_id'
      })
      person.belongsTo(models.subjects, {
        foreignKey: 'person_id'
      })
      person.hasOne(models.users, {
        foreignKey: 'users_id'
      })
    }
  };
  person.init({
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
    nickname: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'O e-mail digitado é inválido'
        }
      }
    },
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'person',
    paranoid: true
  });
  return person;
};