const faker = require('faker/locale/es');

module.exports = function () {
  return {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: faker.name.gender(),
    phone: faker.phone.phoneNumber(),
    rol: faker.helpers.randomize(['estudiante', 'profesor']),
    course: faker.helpers.randomize([
      'giweb-react',
      'gisac',
      'giweb-angular',
      'giweb-nest',
      'giweb-front',
      'pygroup',
    ]),
    image: faker.internet.avatar(),
  };
};
