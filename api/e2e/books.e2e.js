const { MongoClient } = require('mongodb'); // traemos cliente de base de datos
const request = require('supertest');
const creatApp = require('../src/app');
const { config } = require('../src/config'); // Trae configuración para mongodb

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('test for books endpoint', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = creatApp();
    server = app.listen(3001);
    // preparando el cliente de la base de datos
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('test for [get] /api/v1/books', () => {
    test('should return a list of books', async () => {
      // Arrange - Preparando la semilla de datos
      const seedData = await database.collection('books').insertMany([{
        name: 'Book1',
        year: 1998,
        author: 'Daniel Centeno',
      },
      {
        name: 'Book2',
        year: 2004,
        author: 'Pedrito Pinzón',
      },
      ]);
      console.log(seedData);
      // Act
      return request(app)
        .get('/api/v1/books') // importante comenzar con "/"
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
