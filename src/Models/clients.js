const faker = require('faker/locale/es');

module.exports = {
  create() {
    return {
      id: faker.random.uuid(),
      ...faker.helpers.userCard(),
    };
  },
};
