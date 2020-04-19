import Sequelize from 'sequelize';

import { development } from '../config/database';
// import models from '../app/models/index';

import User from '../app/models/User';
import Publication from '../app/models/Publication';
import Comment from '../app/models/Comment';

const models = [User, Publication, Comment];

class Database {
  constructor() {
    this.connection = new Sequelize(development);

    this.init();
    this.loadModels();
  }

  init() {
    this.connection
      .authenticate()
      .then(() => {
        console.info('Connection has been established successfully.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
  }

  loadModels() {
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
