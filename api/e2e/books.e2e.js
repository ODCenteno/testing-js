const mockGetAll = jest.fn(); // subí la declaración para que no lanzara error
const request = require('supertest');
const creatApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/book.fake');

// Método para suplantación mocking con jest
jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('test for books endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = creatApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [get] /api/v1/books', () => {
    test('should return a list of books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
