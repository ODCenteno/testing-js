const BooksService = require('./books.service');

// Generando el fake de la base de datos con los libros
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

// Método para suplantación mocking con jest
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe(' Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a books list', async () => {
      const books = await service.getBooks({});
      console.log(books);

      expect(books.length).toEqual(1);
    });
  });
});
