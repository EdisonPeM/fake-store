const faker = require('faker');

function createProduct() {
  return {
    id: faker.random.uuid(),
    type: faker.commerce.product(),
    name: faker.commerce.productName(),
    price: +faker.commerce.price(),
    color: faker.commerce.color(),
    department: faker.commerce.department(),
  };
}

function createProductList(length = 10) {
  const resp = [];
  for (let i = 0; i < length; i++) {
    resp.push(createProduct());
  }
  return resp;
}

module.exports = {
  createProduct,
  createProductList,
};
