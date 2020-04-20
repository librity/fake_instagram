import Sequelize from 'sequelize';
import { writeFileSync } from 'fs';
import { join } from 'path';

import { development } from '../src/config/database';

const generateSchema = async () => {
  const file = join(__dirname, '..', 'src', 'database', 'schema.json');
  const queryInterface = new Sequelize(development).getQueryInterface();

  const databaseSchema = await queryInterface
    .showAllSchemas()
    .map((table) => table[`Tables_in_${development.database}`]);

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

  process.exit(0);
};

generateSchema();
