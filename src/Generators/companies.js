const faker = require('faker/locale/es');

module.exports = function () {
  return {
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    suffix: faker.company.companySuffix(),
    catchPhrase: faker.company.catchPhrase(),
  };
};
