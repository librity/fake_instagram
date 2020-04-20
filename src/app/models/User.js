import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },

        name: Sequelize.STRING,
        email: Sequelize.STRING,
        username: Sequelize.STRING,
        avatar: Sequelize.STRING,

        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,

        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Publication, { foreignKey: 'user_id' });
    this.hasMany(models.Comment, { foreignKey: 'user_id' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
