const faker = require('faker/locale/es');

function createProduct() {
  return {
    id: faker.random.uuid(),
    type: faker.commerce.product(),
    name: faker.commerce.productName(),
    image: faker.random.arrayElement([
      faker.image.unsplash.objects,
      faker.image.lorempixel.food,
      faker.image.unsplash.technology,
      faker.image.lorempixel.fashion,
    ])(),
    price: faker.random.number(),
    color: faker.commerce.color(),
    department: faker.commerce.department(),
  };
}

function createProductList(length = 10) {
  const pList = [];
  for (let i = 0; i < length; i++) {
    pList.push(createProduct());
  }
  return pList;
}

module.exports = {
  createProduct,
  createProductList,
};
