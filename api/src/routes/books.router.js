const express = require('express');
const BooksService = require('../services/books.service');

const router = express.Router();
const service = new BooksService(); // lógica de negocio

// Ruta para obtener los libros de la base de datos
router.get('/', async (req, res) => {
  const books = await service.getBooks();
  res.status(200).json(books);
});

// Ruta para agregar nuevos libros a la base de datos
router.post('/', async (req, res) => {
  const { body } = req;
  const newBook = await service.createBook(body);
  res.status(201).json(newBook);
});

module.exports = router;
