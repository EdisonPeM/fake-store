const faker = require('faker/locale/es');

const catNames = [
  'Oliver',
  'Leo',
  'Milo',
  'Charlie',
  'Max',
  'Jack',
  'Simba',
  'Loki',
  'Oscar',
  'Jasper',
  'Buddy',
  'Tiger',
  'Toby',
  'George',
  'Smokey',
  'Simon',
  'Tigger',
  'Ollie',
  'Louie',
  'Felix',
  'Dexter',
  'Shadow',
  'Finn',
  'Henry',
  'Kitty',
  'Oreo',
  'Gus',
  'Binx',
  'Winston',
  'Sam',
  'Rocky',
  'Gizmo',
  'Sammy',
  'Jax',
  'Sebastian',
  'Blu',
  'Theo',
  'Beau',
  'Salem',
  'Chester',
  'Lucky',
  'Frankie',
  'Boots',
  'Cooper',
  'Thor',
  'Bear',
  'Romeo',
  'Teddy',
  'Bandit',
  'Ziggy',
  'Apollo',
  'Pumpkin',
  'Boo',
  'Zeus',
  'Bob',
  'Tucker',
  'Jackson',
  'Tom',
  'Cosmo',
  'Bruce',
  'Murphy',
  'Buster',
  'Midnight',
  'Moose',
  'Merlin',
  'Frank',
  'Joey',
  'Thomas',
  'Harley',
  'Prince',
  'Archie',
  'Tommy',
  'Marley',
  'Otis',
  'Casper',
  'Harry',
  'Benny',
  'Percy',
  'Bentley',
  'Jake',
  'Ozzy',
  'Ash',
  'Sylvester',
  'Mickey',
  'Fred',
  'Walter',
  'Clyde',
  'Pepper',
  'Calvin',
  'Tux',
  'Stanley',
  'Garfield',
  'Louis',
  'Mowgli',
  'Mac',
  'Luke',
  'Sunny',
  'Duke',
  'Hobbes',
  'Remi',
];

const michiData = require('../data/michis.json');

module.exports = function () {
  return {
    id: faker.random.uuid(),
    image: faker.image.lorempixel.cats(),
    name: faker.helpers.randomize(catNames),
    ...faker.helpers.randomize(michiData),
  };
};