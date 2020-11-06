const faker = require('faker/locale/es');

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

exports.createProductList = function createProductList(length = 10) {
  const resp = [];
  for (let i = 0; i < length; i++) {
    let temp = createProduct();
    resp.push(temp);
  }
  return resp;
};
