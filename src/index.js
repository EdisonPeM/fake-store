const fs = require('fs');

const productsGenerator = require('./generators/products');

const generatedData = {
  products: productsGenerator.createProductList(100),
};

fs.writeFileSync('db.json', JSON.stringify(generatedData, null, '\t'));
