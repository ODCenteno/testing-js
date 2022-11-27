const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let index = 0; index < limit; index += 1) {
    fakeBooks.push(generateOneBook());
  }
  console.log(`Fake books response: ${fakeBooks}`);
  return [...fakeBooks];
};

const tryit = generateManyBooks(7);
console.log(tryit);

module.exports = { generateOneBook, generateManyBooks };
