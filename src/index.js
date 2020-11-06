const fs = require('fs');

const usersGenerator = require('./generators/users');
const productsGenerator = require('./generators/products');
const companiesGenerator = require('./generators/companies');
const vehiclesGenerator = require('./generators/vehicles');
const clientsGenerator = require('./generators/clients');

const generatedData = {
  users: usersGenerator.createUserList(4),
  products: productsGenerator.createProductList(100),
  companies: companiesGenerator.createCompanyList(10),
  vehicles: vehiclesGenerator.createVehicleList(50),
  clients: clientsGenerator.createClientList(20),
};

fs.writeFileSync('db.json', JSON.stringify(generatedData, null, '\t'));
