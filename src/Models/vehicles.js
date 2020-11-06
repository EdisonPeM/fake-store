const faker = require('faker/locale/es');

module.exports = {
  create() {
    return {
      id: faker.random.uuid(),
      vehicle: faker.vehicle.vehicle(),
      manufacturer: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      type: faker.vehicle.type(),
      fuel: faker.vehicle.fuel(),
      vin: faker.vehicle.vin(),
      color: faker.vehicle.color(),
    };
  },
};
