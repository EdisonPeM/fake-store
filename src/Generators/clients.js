const faker = require('faker/locale/es');

module.exports = function () {
  return {
    id: faker.random.uuid(),
    ...faker.helpers.userCard(),
  };
};
