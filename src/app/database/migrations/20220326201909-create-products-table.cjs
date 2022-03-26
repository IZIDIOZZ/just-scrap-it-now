'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('products',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        title: {
          type: Sequelize.TEXT
        },
        image: {
          type: Sequelize.TEXT
        },
        price: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.TEXT
        },
        url: {
          type: Sequelize.STRING(500)
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    );

  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  }
};
