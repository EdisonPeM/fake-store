const faker = require('faker/locale/es');

function createUser() {
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
}

function createUserList(length = 10) {
  const pList = [];
  for (let i = 0; i < length; i++) {
    pList.push(createUser());
  }
  return pList;
}

module.exports = {
  createUser,
  createUserList,
};
