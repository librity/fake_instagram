import Sequelize, { Model } from 'sequelize';

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.TEXT,

        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
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
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export default Comment;
