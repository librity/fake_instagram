const faker = require('faker');

const fakeComments = Array(1000)
  .fill()
  .map((_num) => {
    return {
      description: faker.lorem.sentence(),
      publication_id: Math.floor(Math.random() * 499) + 1,
      user_id: Math.floor(Math.random() * 99) + 1,

      created_at: new Date(),
      updated_at: new Date(),
    };
  });

module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert('comments', fakeComments, {});
  },

  down: () => {},
};
