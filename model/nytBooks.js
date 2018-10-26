const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nytBooksSchema = new Schema(
  {
    title: { type: String },
    author: { type: String },
    description: { type: String }
  });

module.exports = mongoose.model('nycBooks', nytBooksSchema);
