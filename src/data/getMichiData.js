const fs = require('fs');
const axios = require('axios');

async function getData() {
  let resp = await axios.get('https://api.thecatapi.com/v1/breeds');

  let michiData = resp.data.map(d => ({
    breed: d.name,
    origin: d.origin,
    description: d.description,
  }));

  fs.writeFileSync('michis.json', JSON.stringify(michiData, null, '\t'));
}

getData();
