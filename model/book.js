const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: 'Please specify a title' },
  author: { type: String, required: 'Please specify a author' },
  year: { type: Number, require: 'Please specify a year' },
  genre: { type: String, required: 'Please specify a genre' },
  isbn: { type: String, required: 'Please enter the ISBN number' },
  description: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);
