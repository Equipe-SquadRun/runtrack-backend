'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      person_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'person', key: 'id'
        }
      },
      company_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'company', key: 'id'
        }
      },
      status_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'status', key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('links');
  }
};