const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
  },
  isbn: {
    type: String,
    required: [true, 'Please add an ISBN'],
    unique: true,
  },
  publishedDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Book', BookSchema);
