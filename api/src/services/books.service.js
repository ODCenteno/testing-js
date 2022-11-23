const MongoLib = require('../lib/mongo.lib');

class BooksService {
  constructor() {
    this.collection = 'books'; // Define la coleccion compatible en mongo
    this.mongoDB = new MongoLib(); // Dependencia
  }

  getBooks(query) {
    return this.mongoDB.getAll(this.collection, query);
  }

  createBook(newBook) {
    return this.mongoDB.create(this.collection, newBook);
  }
}

module.exports = BooksService;
