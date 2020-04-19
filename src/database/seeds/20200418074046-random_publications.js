const faker = require('faker');

const fakePublications = Array(500)
  .fill()
  .map((_num) => {
    return {
      image: faker.image.image(),
      likes: Math.floor(Math.random() * 100),
      user_id: Math.floor(Math.random() * 99) + 1,

      created_at: new Date(),
      updated_at: new Date(),
    };
  });

module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert('publications', fakePublications, {});
  },

  down: () => {},
};
