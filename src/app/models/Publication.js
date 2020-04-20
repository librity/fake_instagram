import Sequelize, { Model } from 'sequelize';

class Publication extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },

        image: Sequelize.STRING,
        likes: Sequelize.INTEGER,

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
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasMany(models.Comment, { foreignKey: 'publication_id' });
  }
}

export default Publication;
