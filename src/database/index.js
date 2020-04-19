import Sequelize, { QueryInterface } from 'sequelize';
import { writeFileSync } from 'fs';
import { join } from 'path';

import { development } from '../config/database';
import models from '../app/models/index';

class Database {
  constructor() {
    this.connection = new Sequelize(development);

    this.init();
    this.loadModels();
    this.generateSchema();
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

  async generateSchema() {
    const file = join(__dirname, 'schema.json');
    const queryInterface = this.connection.getQueryInterface();

    const databaseSchema = await queryInterface
      .showAllSchemas()
      .map((table) => table['Tables_in_fake-instagram']);

    const tableSchemas = await Promise.all(
      databaseSchema.map(async (table) => {
        const tableSchema = await queryInterface.describeTable(table);

        return { [table]: tableSchema };
      })
    );

    writeFileSync(
      file,
      JSON.stringify({ databaseSchema, tableSchemas }, null, 2)
    );

    console.info('📜 Successfully wrote database schema');
  }
}

export default new Database();
