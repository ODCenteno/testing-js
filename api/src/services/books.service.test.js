const BooksService = require('./books.service');

// Generando el fake de la base de datos con los libros
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const mockGetAll = jest.fn();

// const MongoLibStub = {
//   // getAll: () => [...fakeBooks], para mock
//   getAll: mockGetAll,
//   create: () => {},
// };

// Método para suplantación mocking con jest
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe(' Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    // test('should return a books list using mock', async () => {
    //   // Arrange

    //   // Act
    //   const books = await service.getBooks({});
    //   console.log(books);
    //   // Assert
    //   expect(books.length).toEqual(1);
    // });

    test('should return a books list with spy', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', { });
    });
  });
});
