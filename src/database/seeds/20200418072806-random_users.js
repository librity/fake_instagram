const bcrypt = require('bcryptjs');
const faker = require('faker');

faker.locale = 'pt_BR';

const fakeUsers = Array(100)
  .fill()
  .map((_num) => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),

      password_hash: bcrypt.hashSync('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    };
  });

module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert('users', fakeUsers, {});
  },

  down: () => {},
};
