const faker = require('faker/locale/es');

module.exports = {
  create() {
    const postName = faker.lorem.slug();
    return {
      id: postName,
      title: postName.split('-').join(' '),
      content:
        faker.lorem.sentences() +
        '/n' +
        faker.lorem.paragraphs(5) +
        '/n' +
        faker.lorem.words() +
        '/n' +
        faker.lorem.paragraphs(3) +
        '/n' +
        faker.lorem.sentences() +
        '/n' +
        faker.lorem.words() +
        '/n' +
        faker.lorem.sentences() +
        '/n' +
        faker.lorem.paragraphs(4),
    };
  },
};
