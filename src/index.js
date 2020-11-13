const fs = require('fs');
const generate = require('./lib/Generator');

const userGen = require('./Generators/users');
const productGen = require('./Generators/products');
const companyGen = require('./Generators/companies');
const vehicleGen = require('./Generators/vehicles');
const clientGen = require('./Generators/clients');
const postGen = require('./Generators/posts');
const michiGen = require('./Generators/michis');
const studentGen = require('./Generators/students');

const generatedData = {
  singleUser: userGen(),
  students: generate(studentGen, 30),
  users: generate(userGen),
  products: generate(productGen, 100),
  companies: generate(companyGen, 10),
  vehicles: generate(vehicleGen, 50),
  clients: generate(clientGen, 20),
  posts: generate(postGen, 7),
  michis: generate(michiGen, 50),
};

fs.writeFileSync('db.json', JSON.stringify(generatedData, null, '\t'));
