const express = require('express');
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  patchBook,
  deleteBook,
  getBooksByTitle,
} = require('../controllers/bookController');

const router = express.Router();

// Define routes
router.post('/books', createBook); // Create a new book
router.get('/books', getBooks); // Get all books
router.get('/books/:id', getBookById); // Get a book by ID
router.put('/books/:id', updateBook); // Update a book by ID
router.patch('/books/:id', patchBook); // Partially update a book by ID
router.delete('/books/:id', deleteBook); // Delete a book by ID
router.get('/books/title', getBooksByTitle); // Get books by title

module.exports = router;
