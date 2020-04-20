import Sequelize from 'sequelize';

import { development } from '../config/database';
import models from '../app/models/index';

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
        console.info('🔗 Connection has been established successfully.');
      })
      .catch((err) => {
        console.error('😭 Unable to connect to the database:', err);
      });
  }

  loadModels() {
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );

    console.info('🏺 Successfully loaded models');
  }
}

export default new Database();
