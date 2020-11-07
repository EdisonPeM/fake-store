const faker = require('faker/locale/es');

module.exports = function () {
  return {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: faker.name.gender(),
    phone: faker.phone.phoneNumber(),
    userName: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    pass: faker.internet.password(),
  };
};
