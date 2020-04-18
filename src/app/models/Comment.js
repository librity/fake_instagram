const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Publication, {
      foreignKey: 'publication_id',
      as: 'publication',
    });
  }
}

module.exports = Comment;