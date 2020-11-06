const faker = require('faker/locale/es');

module.exports = {
  create() {
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
  },
};
