const fs = require('fs');
const generate = require('./lib/Generator');

const userModel = require('./Models/users');
const productModel = require('./Models/products');
const companieModel = require('./Models/companies');
const vehicleModel = require('./Models/vehicles');
const clientModel = require('./Models/clients');
const postModel = require('./Models/posts');

const generatedData = {
  users: generate(userModel),
  products: generate(productModel, 100),
  companies: generate(companieModel, 10),
  vehicles: generate(vehicleModel, 50),
  clients: generate(clientModel, 20),
  posts: generate(postModel, 7),
};

fs.writeFileSync('db.json', JSON.stringify(generatedData, null, '\t'));
