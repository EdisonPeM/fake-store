const faker = require('faker/locale/es');

function createClient() {
  return {
    id: faker.random.uuid(),
    ...faker.helpers.userCard(),
  };
}

function createClientList(length = 10) {
  const pList = [];
  for (let i = 0; i < length; i++) {
    pList.push(createClient());
  }
  return pList;
}

module.exports = {
  createClient,
  createClientList,
};
