const faker = require('faker/locale/es');

function createCompany() {
  return {
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    suffix: faker.company.companySuffix(),
    catchPhrase: faker.company.catchPhrase(),
  };
}

function createCompanyList(length = 10) {
  const cList = [];
  for (let i = 0; i < length; i++) {
    cList.push(createCompany());
  }
  return cList;
}

module.exports = {
  createCompany,
  createCompanyList,
};
