const faker = require('faker/locale/es');

function createPost() {
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
      faker.lorem.sentences() +
      '/n' +
      faker.lorem.paragraphs(3) +
      '/n' +
      faker.lorem.words() +
      '/n' +
      faker.lorem.sentences() +
      '/n' +
      faker.lorem.paragraphs(4),
  };
}

function createPostList(length = 10) {
  const pList = [];
  for (let i = 0; i < length; i++) {
    pList.push(createPost());
  }
  return pList;
}

module.exports = {
  createPost,
  createPostList,
};
