module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('comments', 'publication_id', {
      type: Sequelize.INTEGER,
      references: { model: 'publications', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('comments', 'publication_id');
  },
};
