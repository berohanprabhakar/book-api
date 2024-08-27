const Book = require('../models/Book');
const asyncHandler = require('../middlewares/asyncHandler');
const ApiFeatures = require('../utils/apiFeatures');

// Create a new book
const createBook = asyncHandler(async (req, res) => {
  const { title, author, isbn, publishedDate } = req.body;
  const book = await Book.create({ title, author, isbn, publishedDate });
  res.status(201).json(book);
});

// Get all books with optional filtering, sorting, and pagination
const getBooks = asyncHandler(async (req, res) => {
  const apiFeatures = new ApiFeatures(Book.find(), req.query)
    .filter()
    .sort()
    .paginate();

  const books = await apiFeatures.query;

  res.status(200).json({
    success: true,
    count: books.length,
    data: books,
  });
});

// Get a book by ID
const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
});

// Update a book by ID (PUT method)
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
});

// Patch (partially update) a book by ID
const patchBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  // Update only the fields provided in the request body
  Object.keys(req.body).forEach(key => {
    book[key] = req.body[key];
  });

  await book.save();
  res.status(200).json(book);
});

// Delete a book by ID
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json({ message: 'Book deleted successfully' });
});

// Get books by Title
const getBooksByTitle = asyncHandler(async (req, res) => {
  const title = req.query.title;

  if (!title) {
    return res.status(400).json({ message: 'Title query parameter is required' });
  }

  const books = await Book.find({ title: new RegExp(title, 'i') });

  if (books.length === 0) {
    return res.status(404).json({ message: 'No books found with that title' });
  }

  res.status(200).json({
    success: true,
    count: books.length,
    data: books,
  });
});

// Export all functions at once
module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  patchBook,
  deleteBook,
  getBooksByTitle,
};
