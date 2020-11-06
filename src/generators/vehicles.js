const faker = require('faker/locale/es');

function createVehicle() {
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
}

function createVehicleList(length = 10) {
  const cList = [];
  for (let i = 0; i < length; i++) {
    cList.push(createVehicle());
  }
  return cList;
}

module.exports = {
  createVehicle,
  createVehicleList,
};
